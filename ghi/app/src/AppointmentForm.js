import React from "react";

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vin: "",
      customer: "",
      date_time: "",
      technicians: [],
      reason: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const technicianUrl = "http://localhost:8080/api/technicians/";
    const technicianResponse = await fetch(technicianUrl);
    if (technicianResponse.ok) {
      const technicianData = await technicianResponse.json();
      this.setState({ technicians: technicianData.technicians });
    }
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.technicians;

    const appointmentsUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const appointmentResponse = await fetch(appointmentsUrl, fetchConfig);
    if (appointmentResponse.ok) {
      this.setState({
        vin: "",
        customer: "",
        date_time: "",
        technicians: [],
        reason: "",
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Schedule an appointment</h1>
            <form onSubmit={this.handleSubmit} id="create-appointment-form">
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.vin}
                  placeholder="Vin"
                  required
                  type="text"
                  id="vin"
                  name="vin"
                  className="form-control"
                />
                <label htmlFor="vin">Automobile VIN</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.customer}
                  placeholder="Customer"
                  required
                  type="text"
                  id="customer"
                  name="customer"
                  className="form-control"
                />
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.date_time}
                  placeholder="Date Time"
                  required
                  type="datetime-local"
                  id="date_time"
                  name="date_time"
                  className="form-control"
                />
                <label htmlFor="date_time">Date and Time</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChange}
                  value={this.state.technicians.employee_id}
                  required
                  id="technician"
                  name="technician"
                  className="form-select"
                >
                  <option value="">Choose a Technician</option>
                  {this.state.technicians.map((technician) => {
                    return (
                      <option key={technician.id} value={technician.id}>
                        {technician.employee_id}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.reason}
                  placeholder="Reason"
                  required
                  type="text"
                  id="reason"
                  name="reason"
                  className="form-control"
                />
                <label htmlFor="reason">Reason</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentForm;
