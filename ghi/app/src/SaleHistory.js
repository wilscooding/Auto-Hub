import React, { useEffect, useState } from "react";

function SalesHistory() {
  const [salespeople, setSalespeople] = useState([]);
  const [sales, setSales] = useState([]);
  const [salesperson, setSalesperson] = useState("");

  const fetchSalespeopleData = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  const fetchSalesData = async () => {
    const url = "http://localhost:8090/api/sales/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  };

  useEffect(() => {
    fetchSalespeopleData();
  }, []);

  useEffect(() => {
    fetchSalesData();
  }, []);

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };

  const getFilteredSales = (salesperson, sales) => {
    if (!salesperson) {
      return sales;
    }
    return sales.filter((sale) =>
      sale.salesperson.employee_id.includes(salesperson)
    );
  };

  const filteredSales = getFilteredSales(salesperson, sales);

  return (
    <div className="container">
      <div className="container d-flex justify-content-around align-items-center">
        <h1>Salesperson History</h1>
      </div>
      <div className="mb-3">
        <select
          onChange={handleSalespersonChange}
          value={salesperson}
          required
          name="salesperson"
          id="salesperson"
          className="form-select"
        >
          <option value="">Choose a salesperson</option>
          {salespeople.map((salesperson) => (
            <option key={salesperson.id} value={salesperson.employee_id}>
              {salesperson.first_name} {salesperson.last_name} -{" "}
              {salesperson.employee_id}
            </option>
          ))}
        </select>

        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Salesperson</th>
                <th>Customer</th>
                <th>Automobile VIN</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredSales.map((sale) => (
                <tr key={sale.href}>
                  <td>
                    {sale.salesperson.first_name} {sale.salesperson.last_name}
                  </td>
                  <td>
                    {sale.customer.first_name} {sale.customer.last_name}
                  </td>
                  <td>{sale.automobile.vin}</td>
                  <td>${sale.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalesHistory;