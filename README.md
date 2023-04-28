# CarCar

Team:

* Yosef Dandis  - Service microservice
* Person 2 - Which microservice?

## Design

## Service microservice

I have models for Technicians with views to create/list/delete technicians, Appointments with views to create/list/update/delete appointments, and automobile value objects comming from the inventory service as VIN numbers. My integration with the inventory microservice includes polling for vins that have existed in the inventory microservice, and comparing it to any vin that i have made appointments for in the service microservice. If the vins match, the vip status becomes True for that specific automobile across all of its appointments.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
