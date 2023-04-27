import React, { useState, useEffect } from "react";

function Salesperson() {
  const [salesPeople, setSalespeople] = useState([]);
  const [sales, setSales] = useState([]);
  const [filterSales, setFiltersales] = useState("");

  // const fetchSalesData = async () => {
  //   try {
  //     const salesUrl = "http://localhost:8090/api/sales";
  //     const response = await fetch(salesUrl);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setSales(data.sales);
  //     } else {
  //       throw new Error("Failed to fetch sales data");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const fetchSalespersonData = async () => {
  //   try {
  //     const salespersonUrl = "http://localhost:8090/api/salespeople/";
  //     const response = await fetch(salespersonUrl);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setSalespersons(data.salespersons);
  //     } else {
  //       throw new Error("Failed to fetch salesperson data");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
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
    const value = event.target.value;
    setFiltersales(value);
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
          value={filterSales}
          name="salesperson"
          required
          id="salesperson"
        >
          <option value="">Select salesperson</option>
          {salesPeople.map((salesperson) => (
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
            .filter((sale) => sale.salesperson.id === setFiltersales)
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
