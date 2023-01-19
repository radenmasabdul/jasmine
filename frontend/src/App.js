import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./components/Login";
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users";
import Laporan from "./pages/Laporan";
import AddUser from "./pages/AddUser"
import EditUser from "./pages/EditUser"
import AddLaporan from "./pages/AddLaporan"
import EditLaporan from "./pages/EditLaporan"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/laporan/add" element={<AddLaporan />} />
          <Route path="/laporan/edit/:id" element={<EditLaporan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
