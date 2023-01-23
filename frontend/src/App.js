import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeContext } from "./features/context";

import Login from "./components/Login";
import Logout from "./components/Logout";
import Dashboard from "./pages/Dashboard"
import Laporan from "./pages/Laporan";
import AddLaporan from "./pages/AddLaporan"
import EditLaporan from "./pages/EditLaporan"
import PengajuanJaminan from "./pages/PengajuanJaminan";
import Approval from "./pages/Approval";
import DataJaminan from "./pages/DataJaminan";
import DataSuretyBond from "./pages/DataSuretyBond";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser"
import EditUser from "./pages/EditUser"
import Setting from "./pages/Setting";

function App() {

  const [isLight, setIsLight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/laporan/add" element={<AddLaporan />} />
          <Route path="/laporan/edit/:id" element={<EditLaporan />} />
          <Route path="/jaminan" element={<PengajuanJaminan />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/datajaminan" element={<DataJaminan />} />
          <Route path="/datasuretybond" element={<DataSuretyBond />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
