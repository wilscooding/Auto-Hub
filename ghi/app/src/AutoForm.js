import React, { useEffect, useState } from "react";
function AutoForm() {
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  };
  const handleYearChange = (event) => {
    const value = event.target.value;
    setYear(value);
  };
  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };
  const handleModelChange = (event) => {
    const value = event.target.value;
    setModel(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // create an empty JSON object
    const data = {};

    data.color = color;
    data.year = year;
    data.vin = vin;
    data.model_id = model;

    const autosUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(autosUrl, fetchConfig);
    if (response.ok) {
      const newLocation = await response.json();
      setColor("");
      setYear("");
      setVin("");
      setModel("");
    }
  };
  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add Automobile</h1>
          <form onSubmit={handleSubmit} id="create-presentation-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleColorChange}
                value={color}
                placeholder="name"
                required
                type="text"
                id="name"
                className="form-control"
              />
              <label htmlFor="presenter_name">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={handleYearChange}
                value={year}
                placeholder="Picture"
                id="Picture"
                className="form-control"
              />
              <label htmlFor="presenter_name">Year</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={handleVinChange}
                value={vin}
                placeholder="Picture"
                id="Picture"
                className="form-control"
              />
              <label htmlFor="presenter_name">Vin</label>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                onChange={handleModelChange}
                name="location"
                id="location"
                // className="form-select "
                required
                type="text"
                value={model}
              >
                <option value="">model</option>
                {models.map((m) => {
                  return (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AutoForm;
