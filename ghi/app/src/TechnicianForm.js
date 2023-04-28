import React from "react";

class TechnicianForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_id: "",
      first_name: "",
      last_name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.techs;

    const techniciansUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const technicianResponse = await fetch(techniciansUrl, fetchConfig);
    if (technicianResponse.ok) {
      this.setState({
        employee_id: "",
        first_name: "",
        last_name: "",
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            <form onSubmit={this.handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.employee_id}
                  placeholder="Employee ID"
                  required
                  type="text"
                  id="employee_id"
                  name="employee_id"
                  className="form-control"
                />
                <label htmlFor="employee_id">Employee ID</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.first_name}
                  placeholder="First Name"
                  required
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="form-control"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.last_name}
                  placeholder="Last Name"
                  required
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="form-control"
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicianForm;
