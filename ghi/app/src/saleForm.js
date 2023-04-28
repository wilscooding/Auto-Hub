import React, { useEffect, useState } from "react";

function SaleForm() {
  const [sale, setSale] = useState("");
  const [autos, setAutos] = useState("");
  const [auto, setAuto] = useState([]);
  const [salesperson, setSalesperson] = useState("");
  const [salespersons, setSalespersons] = useState([]);
  const [customer, setCustomer] = useState("");
  const [customers, setCustomers] = useState([]);
  const [price, setPrice] = useState("");

  const handleAutosChange = (event) => {
    const value = event.target.value;
    setAutos(value);
  };

  const handleSalesPersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };
  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    data.automobile = autos;
    data.customer = customer;
    data.salesperson = salesperson;
    data.price = price;

    const salesUrl = "http://localhost:8090/api/sales/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {
      setCustomer("");
      setSalesperson("");
      setPrice("");
      setAutos("");
    }

    const autoUrl = `http://localhost:8100/api/automobiles/${autos}/sold`;
    const fetchAutoConfig = {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
    };

    const autoResponse = await fetch(autoUrl, fetchAutoConfig);
    if (autoResponse.ok) {
    }
  };
  const fetchData = async () => {
    const autoUrl = "http://localhost:8100/api/automobiles";
    const salespeopleUrl = "http://localhost:8090/api/salespeople/";
    const customerUrl = "http://localhost:8090/api/customers/";
    const saleUrl = "http://localhost:8090/api/sales/";

    const autoResponse = await fetch(autoUrl);
    const salesResponse = await fetch(salespeopleUrl);
    const customerResponse = await fetch(customerUrl);
    const saleResponse = await fetch(saleUrl);

    if (
      autoResponse.ok &&
      salesResponse &&
      customerResponse.ok &&
      saleResponse.ok
    ) {
      const autoData = await autoResponse.json();
      const salesData = await salesResponse.json();
      const customerData = await customerResponse.json();
      const saleData = await saleResponse.json();
      setAuto(autoData.autos);
      setSalespersons(salesData.salespeople);
      setCustomers(customerData.customers);
      setSale(saleData.sales);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new sale</h1>
            <form onSubmit={handleSubmit} id="create-presentation-form">
              <div className="mb-3">
                <select
                  value={autos}
                  onChange={handleAutosChange}
                  name="autos"
                  id="autos"
                  className="form-select"
                  required
                >
                  <option value="">Choose a vin</option>
                  {auto.map((automobile) => {
                    if (!automobile.sold) {
                      return (
                        <option key={automobile.vin} value={automobile.vin}>
                          {automobile.vin}
                        </option>
                      );
                    }
                    return null;
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  value={customer}
                  onChange={handleCustomerChange}
                  name="customer"
                  id="customer"
                  className="form-select"
                  required
                >
                  <option value="">Choose a customer</option>
                  {customers.map((customer) => {
                    return (
                      <option
                        key={customer.id}
                        value={`${customer.first_name} ${customer.last_name}`}
                      >
                        {customer.first_name} {customer.last_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  value={salesperson}
                  onChange={handleSalesPersonChange}
                  name="salesperson"
                  id="salesperson"
                  className="form-select"
                  required
                >
                  <option value="">Choose a salesperson</option>
                  {salespersons.map((salesperson) => {
                    return (
                      <option
                        key={salesperson.id}
                        value={`${salesperson.first_name} ${salesperson.last_name}`}
                      >
                        {salesperson.first_name} {salesperson.last_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={price}
                  onChange={handlePriceChange}
                  placeholder="price"
                  required
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                />
                <label htmlFor="presenter_email">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleForm;
