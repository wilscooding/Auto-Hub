import React, { useState, useEffect } from "react";

function ManusList() {
  const [files, setFiles] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setFiles(data.manufacturers);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteButton = async (event) => {
    const { id } = event.target;

    const locationUrl = `http://localhost:8100/api/manufacturers/${id}`;
    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setFiles(files.filter((man) => man.id !== parseInt(id)));
    }
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {files.map((man) => {
          return (
            <tr key={man.id}>
              <td>{man.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  id={man.id}
                  onClick={handleDeleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ManusList;