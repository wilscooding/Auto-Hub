import React from "react";

class AppointmentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      search: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  async componentDidMount() {
    const url = "http://localhost:8080/api/appointments/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ appointments: data.appointments });
    }
  }
  async handleSearch(event) {
    event.preventDefault();

    const searchUrl = `http://localhost:8080/api/appointments/history/`;
    const fetchConfig = {
      method: "get",
    };

    const response = await fetch(searchUrl, fetchConfig);
    console.log(response);
  }
  render() {
    return (
      <>
        <div>
          <br></br>
          <form
            className="form-inline"
            onSubmit={this.handleSearch}
            id="search-vin"
          >
            <div className="input-group mb-3">
              <input
                onChange={this.handleChange}
                value={this.state.search}
                type="text"
                placeholder="Enter VIN #"
                required
                name="search"
                id="search"
                className="form-control"
              />
              <label htmlFor="search"></label>
              <div className="input-group-prepend"></div>
            </div>
          </form>
          <h1>Service History</h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>VIN</th>
                <th>VIP</th>
                <th>Owner</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.appointments.map((appointment) => {
                const date = new Date(
                  appointment.date_time
                ).toLocaleDateString();
                const time = new Date(appointment.date_time).toLocaleTimeString(
                  [],
                  { timeStyle: "short" }
                );
                let vin = "";

                if (this.state.search === "") {
                  return (
                    <tr key={appointment.id}>
                      <td>{appointment.vin}</td>
                      <td>{appointment.vip_status ? "YES" : "NO"} </td>
                      <td>{appointment.customer}</td>
                      <td>{date} </td>
                      <td>{time} </td>
                      <td>{appointment.technician.employee_id}</td>
                      <td>{appointment.reason}</td>
                      <td>{appointment.status}</td>
                    </tr>
                  );
                }

                if (appointment.vin !== this.state.search) {
                  vin = "d-none";
                }

                return (
                  <tr className={vin} key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vip_status ? "YES" : "NO"} </td>
                    <td>{appointment.customer}</td>
                    <td>{date} </td>
                    <td>{time} </td>
                    <td>{appointment.technician.employee_id}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default AppointmentHistory;
