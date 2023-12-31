import React from "react";

class AppointmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appointments: [] };
  }

  async componentDidMount() {
    const appointmentUrl = "http://localhost:8080/api/appointments/";
    const appointmentResponse = await fetch(appointmentUrl);
    if (appointmentResponse.ok) {
      const appointmentData = await appointmentResponse.json();
      this.setState({ appointments: appointmentData.appointments });
    }
  }

  async handleFinished(id) {
    const finishedUrl = `http://localhost:8080/api/appointments/${id}`;
    const fetchConfig = {
      method: "put",
      body: JSON.stringify({ status: "Finished" }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(finishedUrl, fetchConfig);
    if (response.ok) {
      let { appointments } = this.state;
      this.setState({ appointments });
      window.location.reload(false);
    }
  }
  async handleCanceled(id) {
    const canceledUrl = `http://localhost:8080/api/appointments/${id}`;
    const fetchConfig = {
      method: "put",
      body: JSON.stringify({ status: "Canceled" }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(canceledUrl, fetchConfig);
    if (response.ok) {
      let { appointments } = this.state;
      this.setState({ appointments });
      window.location.reload(false);
    }
  }

  render() {
    return (
      <>
        <h1>Service Appointments</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>is VIP?</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map((appointment) => {
              const date = new Date(appointment.date_time).toLocaleDateString();
              const time = new Date(appointment.date_time).toLocaleTimeString(
                [],
                { timeStyle: "short" }
              );

              let visible = "";
              if (appointment.status !== "active") {
                visible = "d-none";
              }
              return (
                <tr className={visible} key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vip_status ? "Yes" : "No"} </td>
                  <td>{appointment.customer}</td>
                  <td>{date}</td>
                  <td>{time}</td>
                  <td>{appointment.technician.employee_id}</td>
                  <td>{appointment.reason}</td>
                  <td>
                    <button
                      onClick={() => this.handleCanceled(appointment.id)}
                      to=""
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleFinished(appointment.id)}
                      to=""
                      className="btn btn-success"
                    >
                      Finished
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default AppointmentList;
