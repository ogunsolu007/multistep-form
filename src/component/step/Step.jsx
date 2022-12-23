import React, { Fragment } from "react";
import "./step.scss";

const steps = [
  {
    id: 1,
    text: " Your info",
  },

  {
    id: 2,
    text: " select plan",
  },

  {
    id: 3,
    text: " add-ons",
  },

  {
    id: 4,
    text: " summary",
  },
];

const Step = () => {
  return (
    <>
      <div className="step">
        {steps.map((step) => (
          <div className="step-container" key={step.id}>
            <div className="step-number">{step.id}</div>
            <div className="step-content">
              <span>{`step ${step.id}`}</span>
              <h5>{step.text}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Step;
