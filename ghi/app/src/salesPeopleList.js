import React, { useState, useEffect } from "react";

function SalesPeopleList() {
  const [sales, setSales] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSales(data.salespeople);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Sales People</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr key={sale.employee_id}>
                <td>{sale.employee_id}</td>
                <td>{sale.first_name}</td>
                <td>{sale.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SalesPeopleList;
