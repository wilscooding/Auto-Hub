import React, { useState, useEffect } from "react";

function ModelsList() {
  const [files, setFiles] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setFiles(data.models);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteButton = async (event) => {
    const { id } = event.target;

    const locationUrl = `http://localhost:8100/api/models/${id}`;
    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      setFiles(files.filter((model) => model.id !== parseInt(id)));
    }
  };

  const styleObj = {
    width: 100,
    borderRadius: 10,
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {files.map((model) => {
          return (
            <tr key={model.id}>
              <td>{model.name}</td>
              <td>{model.manufacturer.name}</td>
              <td>
                <img
                  style={styleObj}
                  src={model.picture_url}
                  alt="Car picture"
                />
                <button
                  className="btn btn-danger"
                  id={model.id}
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

export default ModelsList;
