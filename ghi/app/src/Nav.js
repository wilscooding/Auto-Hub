import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
              <NavLink className="nav-link" to="/manufacturers/new">Manufacturers Form</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/models">Models</NavLink>
              <NavLink className="nav-link" to="/models/new">Models Form</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
              <NavLink className="nav-link" to="/automobiles/new">Add Automobile</NavLink>
              </li>
            <li>
              <NavLink className="nav-link" to="/salespeople">Salespeople</NavLink>
              <NavLink className="nav-link" to="/salespeople/new">New Salesperson</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/customer">Customers</NavLink>
              <NavLink className="nav-link" to="/customer/new">New Customer</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/sales">Sales</NavLink>
              <NavLink className="nav-link" to="sales/new">New Sale</NavLink>

            </li>
            <li>
              <NavLink className="nav-link" to="/technicians">Technicians</NavLink>
              <NavLink className="nav-link" to="/technicians/new">Add a Technician</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/appointments">Service Appointments</NavLink>
              <NavLink className="nav-link" to="/appointments/new">Schedule a Service Appointment</NavLink>
            </li>
            <li>
               <NavLink className="nav-link" to="sales/history">Sales History</NavLink>
               <NavLink className="nav-link" to="/appointments/History">Service History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
