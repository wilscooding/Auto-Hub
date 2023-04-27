import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CustomerForm from "./customerForm";
import CustomerList from "./customerList";
import SaleForm from "./saleForm";
import SaleList from "./saleList";
import SalesPeopleList from "./salesPeopleList";
import SalesPeopleForm from "./salesPeopleForm";
import AutoForm from "./AutoForm";
import AutoList from "./AutoList";
import ManuForm from "./ManuForm";
import ManuList from "./ManuList";
import ModelsForm from "./ModelsForm";
import ModelsList from "./ModelList";
import SalesHistory from "./SaleHistory";
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import AppointmentHistory from './AppointmentHistory';
function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers/">
            <Route index element={<ManuList />} />
            <Route path="new/" element={<ManuForm />}></Route>
          </Route>
          <Route path="models/">
            <Route index element={<ModelsList />} />
            <Route path="new/" element={<ModelsForm />}></Route>
          </Route>
          <Route path="automobiles/">
            <Route index element={<AutoList />} />
            <Route path="new/" element={<AutoForm />}></Route>
          </Route>

          <Route path="salespeople/">
            <Route index element={<SalesPeopleList />}></Route>
            <Route path="new/" element={<SalesPeopleForm />}></Route>
          </Route>
          <Route path="customer/">
            <Route index element={<CustomerList />}></Route>
            <Route path="new/" element={<CustomerForm />}></Route>
          </Route>
          <Route path="sales/">
            <Route index element={<SaleList />}></Route>
            <Route path="new/" element={<SaleForm />}></Route>
            <Route path="history" element={<SalesHistory   />}/>
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianList technicians={props.technicians} />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route index element={<AppointmentList appointments={props.appointments} />} />
            <Route path="history" element={<AppointmentHistory appointments={props.appointments} />} />
            <Route path="new" element={<AppointmentForm />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
