# Simplified administration

## Overview


## Provision a database in minutes
See how to provision an Autonomous Database in just a matter of minutes.

[](youtube:C7Ui7dlpWXY)

## Save money and improve utilization with auto scale 
Autonomous Database auto scale allows you to both save money and improve the user experience. Auto scale allows the database to instantly use up to 3x CPU/IO resources when needed. This is great for workloads that have intermittent spikes in usage that lead to CPU or IO constraints.

Importantly, you only pay for what you use. If your workload spikes for 15 minutes and then returns to a steady state - you will only pay for the additional CPUs needed for those 15 minutes.

[](youtube:QqeKd_glinY)

<details>
<summary>**Try it!**</summary>

Open two terminal windows:
    
**Auto scale ON**

```console
<copy>
ssh developer
cd autoscale-demo/
. env-on
# -l is the number of sessions. Below, it's 24
./autoscale-runqueries.sh -d $DBNAME -p $DBPASS -l 24
</copy>
```

**Auto scale OFF**

```console
<copy>
ssh developer
cd autoscale-demo/
. env-off
# -l is the number of sessions. Below, it's 24
./fixed-runqueries.sh -d $DBNAME -p $DBPASS -l 24
</copy>
```

Then, monitor the queries:
* [Auto scale ON](https://qggemtywectzfj9-autoscaleon.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/_sdw/?nav=autonomous-db)
* [Auto scale OFF](https://qggemtywectzfj9-autoscaleoff.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/_sdw/?nav=autonomous-db)

**End the workload**
```console
<copy>
ssh developer
cd autoscale-demo/
./kill-workload.sh
</copy>
```

</details>

