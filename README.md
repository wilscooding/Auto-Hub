# CarCar

Team:

* Yosef Dandis  - Service microservice
* Wilkin Ruiz - Sales microservice?

## Design

## Service microservice

I have models for Technicians with views to create/list/delete technicians, Appointments with views to create/list/update/delete appointments, and automobile value objects comming from the inventory service as VIN numbers. My integration with the inventory microservice includes polling for vins that have existed in the inventory microservice, and comparing it to any vin that i have made appointments for in the service microservice. If the vins match, the vip status becomes True for that specific automobile across all of its appointments.

## Sales microservice
I developed a Sales microservice that encompasses models representing key entities involved in the sales process. The "Customer" model captures customer information like their first name, last name, and contact details. Additionally, the "SalesPerson" model stores details about salespersons, including their first name, last name, and employee ID. To interact with the inventory microservice, I incorporated an "AutomobileVO" model with a vin property for retrieving data.

The microservice also includes a "Sale" model that establishes relationships with the AutomobileVO, SalesPerson, and Customer models through foreign keys. By utilizing function-based views and defining appropriate endpoints, I created APIs that enable the creation, deletion, and retrieval of sales-related data.

On the front-end, I implemented a React-based user interface to facilitate user interactions. This interface allows users to effortlessly create new sales, delete existing ones, and conveniently track sales information. The integration between the front-end and microservice backend ensures seamless management of sales data and delivers an optimal user experience.
