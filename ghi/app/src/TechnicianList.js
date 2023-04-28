import React from "react";

class TechnicianList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { technicians: [] };
  }

  async componentDidMount() {
    const technicianUrl = "http://localhost:8080/api/technicians/";
    const technicianResponse = await fetch(technicianUrl);
    if (technicianResponse.ok) {
      const techniciansJSON = await technicianResponse.json();
      this.setState({ technicians: techniciansJSON.technicians });
    }
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.technicians.map((technician) => (
            <tr key={technician.id}>
              <td>{technician.employee_id}</td>
              <td>{technician.first_name}</td>
              <td>{technician.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TechnicianList;
