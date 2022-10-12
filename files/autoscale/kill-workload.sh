#! /bin/bash

pkill -9 -f 'fixed-burncpu'
pkill -9 -f 'fixed-runqueries'
pkill -9 -f 'fixed-sqlplushigh'
pkill -9 -f 'fixed-sqlpluslow'
pkill -9 -f 'fixed-sqlplusmedium'
pkill -9 -f 'autoscale-sqlpluslow'
pkill -9 -f 'autoscale-sqlplusmedium'
pkill -9 -f 'autoscale-sqlplushigh'
pkill -9 -f 'autoscale-burncpu'
pkill -9 -f 'autoscale-runqueries'
