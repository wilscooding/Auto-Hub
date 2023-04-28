import React, { useState, useEffect } from "react";

function SaleList() {
  const [sales, setSales] = useState([]);
  // const [sale, setSale] = useState('');

  const fetchData = async () => {
    const salesUrl = "http://localhost:8090/api/sales/";
    const salesResponse = await fetch(salesUrl);

    if (salesResponse.ok) {
      const salesData = await salesResponse.json();
      setSales(salesData.sales);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Sales</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson Employee ID</th>
            <th>Salesperson Name</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr key={sale.href}>
                <td>{sale.salesperson.employee_id}</td>
                <td>
                  {sale.salesperson.first_name} {sale.salesperson.last_name}
                </td>
                <td>
                  {sale.customer.first_name} {sale.customer.last_name}
                </td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SaleList;
