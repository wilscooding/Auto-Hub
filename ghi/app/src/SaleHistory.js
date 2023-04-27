import React, { useState, useEffect } from "react";

function Salesperson() {
  const [salespeople, setSalespeople] = useState([]);
  const [sales, setSales] = useState([]);
  const [filteredSales, setFilteredSales] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8090/api/salespeople");
    const salesResponse = await fetch("http://localhost:8090/api/sales/");

    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
    if (salesResponse.ok) {
      const salesData = await salesResponse.json();
      setSales(salesData.sales);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSalespersonChange = (event) => {
    const person = event.target.value;
    const filtered = sales.filter((sale) => sale.salesperson_id == person);
    setFilteredSales(filtered);
    console.log(filtered);
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
          value={filteredSales}
          name="salesperson"
          required
          id="salesperson"
        >
          <option value="">Select salesperson</option>
          {salespeople.map((salesperson) => (
            <option key={salesperson.id} value={salesperson.id}>
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
