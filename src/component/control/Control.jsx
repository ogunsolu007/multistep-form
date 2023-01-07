import "./control.css";

const Button = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="btn-container">
      <button className="back-btn btn" onClick={() => handleClick()}>
        Go Back
      </button>
      <button className="next-btn btn" onClick={() => handleClick("next")}>
        {currentStep === steps.lenght - 1 ? "confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default Button;
