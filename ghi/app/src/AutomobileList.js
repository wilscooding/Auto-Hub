import React, { useState, useEffect } from "react";

function AutoList() {
  const [files, setFiles] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/automobiles/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setFiles(data.autos);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Vin</th>
          <th>Color</th>
          <th>Year</th>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Sold</th>
        </tr>
      </thead>
      <tbody>
        {files.map((auto) => {
          return (
            <tr key={auto.id}>
              <td>{auto.vin}</td>
              <td>{auto.color}</td>
              <td>{auto.year}</td>
              <td>{auto.model.name}</td>
              <td>{auto.model.manufacturer.name}</td>
              <td>{auto.sold ? "YES" : "NO"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AutoList;
