import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="app-body">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
