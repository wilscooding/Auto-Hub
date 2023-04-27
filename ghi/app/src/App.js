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

function App() {
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
