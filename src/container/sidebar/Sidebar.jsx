import React from "react";
import Step from "../../component/step/Step";
import "./side.scss";

const Sidebar = ({ steps, currentStep }) => {
  return (
    <div className="sidebar-container">
      <Step steps={steps} currentStep={currentStep} />
    </div>
  );
};

export default Sidebar;
