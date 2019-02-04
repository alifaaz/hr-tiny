### BACKEND SERVER FOR HAYDER APP FOR CRM

## FEARUTE TO IMPLEMENT
- [/] MANAGE individuals
    - [/] ADD
    - [/] EDIT
    - [/] DELETE
    - [/] SHOW
- [/] MANAGE courses
    - [/] ADD
    - [/] EDIT
    - [/] DELETE
    - [/] SHOW
- [/] MANAGE trips
    - [/] ADD
    - [/] EDIT
    - [/] DELETE
    - [/] SHOW
- [/] MANAGE relations
    - [/] ADD
    - [/] EDIT
    - [/] DELETE
    - [/] SHOW
- [/] MANAGE USER
    - [/] ADD
    - [/] EDIT
    - [/] DELETE
    - [/] SUSPEND
    - [/] SHOW
- [] MANAGE settings
    - [] ADD
    - [] EDIT
    - [] DELETE
    - [] SHOW
- [] MANAGE task
    - [] ADD
    - [] EDIT
    - [] DELETE
    - [] SHOW
- [] REPORTS
    - [] FILTERS
    - [] BUILD QUERY REPORT








## FOLDER STRUCTURE
SRC__
     |_bin
        |_www.js server start
     |_config
        |_erro
+++==---
---


## error to sovle
1. [/] cast error mongoose
		__bynot apply sny extra char to id__
2. [/]  RangeError => problem here at query function of mongodb


### permission impelemetaion
every feature  has its own flag so that make it possible to reach or not so when client ask for spesific feature the client must apply
- individuals ==> flag = indi
- course ==> flag = couese
- trips ==> flag = trip
- relations ==> flag = relation
- setting ==> flag = ["admin","user"]
- reports ==> flag = report
- task ==> flag = task
- all ==> flag = admin


alifae(alifaazali@gmail.com)
__IS __NOT __GOOOD__
ali - [aligaazali@mail.com]

***************** __CHANNEL__  ****************************************** __CHANNEL__ *****************************************__CHANNEL__ **************** __CHANEEL__
