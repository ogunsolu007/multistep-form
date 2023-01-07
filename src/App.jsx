import { useState } from "react";
import { StepperContext } from "./context/StepperContext";
import Sidebar from "./container/sidebar/Sidebar";
import "./App.scss";
import Personal from "./container/main/personal/Personal";
import Plan from "./container/main/plan/Plan";
import Summary from "./container/main/summary/Summary";
import AddOns from "./container/main/addons/AddOns/";
import Button from "./component/control/Control";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  // Description of steps

  const steps = ["   Your info", " select plan", " add-ons", " summary"];

  // Switch between step to determine component to be shown

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Personal />;
      case 2:
        return <Plan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="app">
      <div className="app-container">
        <Sidebar steps={steps} currentStep={currentStep} />
        <div className="main-container">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
          <Button
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
