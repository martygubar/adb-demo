#! /bin/bash

# This script generates a CPU burning workload on your ADW/ATP database. It allows to pick the database services and the level of concurrency for the workload. It creates a table named T and a function named burncpu and runs a query using that function from that table, sessions running this workload will be 100% on CPU.
# Using This Script
# - Have local sqlplus installed on your machine
# - Create three symbolic links to sqlplus named as sqlpluslow, sqlplusmedium, sqlplushigh. This is to make monitoring easier for different database services
# 		For example;
#		ln -s /Applications/instantclient_12_2/sqlplus sqlpluslow
#		ln -s /Applications/instantclient_12_2/sqlplus sqlplusmedium
#		ln -s /Applications/instantclient_12_2/sqlplus sqlplushigh
# - Configure SQL*Net connection to your ADW/ATP database and set the environment variable TNS_ADMIN to the right directory
# - Run the script with the right parameters. Pick the level of concurrency for each database services based on your requirements. If the database does not have the required table and the PL/SQL function run the script with the -s argument.
#	For example: 
#	./burncpu.sh -d testdw -p adminpass -l 2 -m 2 -h 2 ----> Connects to the database TESTDW using the admin password adminpass and runs 2 concurrent sessions each in LOW, MEDIUM, HIGH services
#	./burncpu.sh -d testdw -p adminpass -s ----> Connects to the database TESTDW using the admin password adminpass and runs the setup process which creates the required table and PL/SQL function


usage() { echo "Usage: $0 -d <database_name> -p <admin_password> -l <no_of_low_sessions_to_start> -m <no_of_medium_sessions_to_start> -h <no_of_high_sessions_to_start> -s" 1>&2; exit 1; }

runQuery()
{
  while true; do
echo $1
	RAND_VAL=$RANDOM
	./sqlplus$1 /nolog <<-EOF
	connect admin/${p}@${d}_$1
	select /*+ no_result_cache */ burncpu from t;
	exit;
	EOF

  done
	 
}

setup()
{
	sqlplus /nolog <<-EOF

	connect admin/${p}@${d}_low
	drop table t;
	create table t as select * from all_objects;
	insert /*+ append */ into t select * from t;
	commit;
	create or replace function burncpu return number parallel_enable is
	      i number := 100;
	      j number := 101;
	      k number;
	      a number := 1;
	  begin
	     while a <= 100000000000000000000000 loop
		k := (i*j)/2+(i*j)/3+(i*j)/4+(i*j)/5+(i*j)/6+(i*j)/7+(i*j)/8+(i*j)/9+(i*j)/10;
		i := i + 1;
	       j := j + 1;
	       a := a+1;
	     end loop;
	   exception
	     when others then
	     null;
	 end;
	/

	exit;
	EOF

}

while getopts "sd:p:l:m:h:" o; do
    case "${o}" in
        s)
            setup_yes=1
            ;;
        d)
            d=${OPTARG}
            ;;
        p)
            p=${OPTARG}
            ;;
        l)
            l=${OPTARG}
            ;;
        m)
            m=${OPTARG}
            ;;
        h)
            h=${OPTARG}
            ;;

        *)
            usage
            ;;
    esac
done

shift $((OPTIND-1))

if ( [ -z "${d}" ] || [ -z "${p}" ]) || ([ -z "${setup_yes}" ] && [ -z "${l}" ] && [ -z "${m}" ] && [ -z "${h}" ]) ; then
    usage
else
  if [ -n "${setup_yes}" ] ; then
        setup
  fi
  if [ -n "${l}" ] || [ -n "${m}" ] || [ -n "${h}" ] ; then

	  countM=`ps -ef|grep -v grep|grep sqlplusm|wc -l`
	  echo "Target number of MEDIUM sessions: $m"
	  #echo "Current number of MEDIUM sessions: $countM"

	  countL=`ps -ef|grep -v grep|grep sqlplusl|wc -l`
	  echo "Target number of LOW sessions: $l"
	  #echo "Current number of LOW sessions: $countL"

	  countH=`ps -ef|grep -v grep|grep sqlplush|wc -l`
	  echo "Target number of HIGH sessions: $h"
	  #echo "Current number of HIGH sessions: $countH"

	 while true
	 do
		if [[ $countL -lt $l ]]
		then
			runQuery low >> /dev/null &
			slp=`cat /dev/urandom | LC_CTYPE=C tr -cd '0-1' | head -c 1`
	#		echo "Sleeping for $slp secs before starting next session..."
			sleep $slp
			countL=`ps -ef|grep -v grep|grep sqlplusl|wc -l`
			echo "Current number of LOW sessions: $countL"

		elif [[ $countM -lt $m ]]
		then
			runQuery medium >> /dev/null &
			slp=`cat /dev/urandom | LC_CTYPE=C tr -cd '0-1' | head -c 1`
	#		echo "Sleeping for $slp secs before starting next session..."
			sleep $slp
			countM=`ps -ef|grep -v grep|grep sqlplusm|wc -l`
			echo "Current number of MEDIUM sessions: $countM"

		elif [[ $countH -lt $h ]]
		then
			runQuery high >> /dev/null &
			slp=`cat /dev/urandom | LC_CTYPE=C tr -cd '0-1' | head -c 1`
	#		echo "Sleeping for $slp secs before starting next session..."
			sleep $slp
			countH=`ps -ef|grep -v grep|grep sqlplush|wc -l`
			echo "Current number of HIGH sessions: $countH"
		else
	#		echo "All sessions active, sleeping for now..."
			sleep 60
		fi

		countM=`ps -ef|grep -v grep|grep sqlplusm|wc -l`
		countL=`ps -ef|grep -v grep|grep sqlplusl|wc -l`
		countH=`ps -ef|grep -v grep|grep sqlplush|wc -l`

	 done
  fi
fi 

