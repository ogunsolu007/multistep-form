import React from "react";
import { Outlet } from "react-router-dom";
import Step from "../../component/step/Step";
import "./side.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Step />
      <Outlet/>
    </div>
  );
};

export default Sidebar;
