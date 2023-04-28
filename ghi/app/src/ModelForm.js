import React, { useEffect, useState } from "react";
function ModelsForm() {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [manufacturers, setManufacturers] = useState([]);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handlePictureChange = (event) => {
    const value = event.target.value;
    setPicture(value);
  };
  const handleManufacturerChange = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    data.name = name;
    data.picture_url = picture;
    data.manufacturer_id = manufacturer;

    const hatsUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(hatsUrl, fetchConfig);
    if (response.ok) {
      setName("");
      setPicture("");
      setManufacturer("");
    }
  };
  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add Model</h1>
          <form onSubmit={handleSubmit} id="create-presentation-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={name}
                placeholder="name"
                required
                type="text"
                id="name"
                className="form-control"
              />
              <label htmlFor="presenter_name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="url"
                onChange={handlePictureChange}
                value={picture}
                placeholder="Picture"
                id="Picture"
                className="form-control"
              />
              <label htmlFor="presenter_name">Picture</label>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                onChange={handleManufacturerChange}
                name="location"
                id="location"
                required
                type="text"
                value={manufacturer}
              >
                <option value="">manufacturer</option>
                {manufacturers.map((m) => {
                  return (
                    <option key={m.href} value={m.id}>
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

export default ModelsForm;
