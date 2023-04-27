import React, { useState, useEffect } from "react";

function Salesperson() {
  const [salespersons, setSalespersons] = useState([]);
  const [sales, setSales] = useState([]);
  const [firstName, setFirstName] = useState("");

  const fetchSalesData = async () => {
    try {
      const salesUrl = "http://localhost:8090/api/sales";
      const response = await fetch(salesUrl);
      if (response.ok) {
        const data = await response.json();
        setSales(data.sales);
      } else {
        throw new Error("Failed to fetch sales data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSalespersonData = async () => {
    try {
      const salespersonUrl = "http://localhost:8090/api/salespeople/";
      const response = await fetch(salespersonUrl);
      if (response.ok) {
        const data = await response.json();
        setSalespersons(data.salespersons);
      } else {
        throw new Error("Failed to fetch salesperson data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSalesData();
    fetchSalespersonData();
  }, []);

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  return (
    <div>
      <div>
        <br />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          onChange={handleSalespersonChange}
          value={firstName}
          name="salesperson"
          required
          id="salesperson"
        >
          <option value="">Select salesperson</option>
          {salespersons.map((salesperson) => (
            <option key={salesperson.id} value={salesperson.first_name}>
              {salesperson.first_name} {salesperson.last_name}
            </option>
          ))}
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales
            .filter((sale) => sale.salesperson.first_name === firstName)
            .map((sale) => (
              <tr key={sale.id}>
                <td>
                  {sale.salesperson.first_name} {sale.salesperson.last_name}
                </td>
                <td>
                  {sale.customer.first_name} {sale.customer.last_name}
                </td>
                <td>{sale.automobile.vin}</td>
                <td>${Number(sale.price).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Salesperson;
