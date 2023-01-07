import React, { useState } from "react";
import "./personal.scss";

const Personal = (props) => {
  const [value, setValue] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const next = (e) => {
    setValue(e.target.value);

    if (e.target.value === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  return (
    <div className="personal">
      <div className="headings">
        <h2 className="heading">Personal info</h2>
        <p className="sub-heading">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="form">
        <div className="label-error">
          <label for="name">Name</label>
          {error && <p>{error}</p>}
        </div>
        <input
          onChange={next}
          value={value}
          type="text"
          id="name"
          placeholder=" e.g. Stephen King"
        />
        <label for="email">Email Address</label>
        <input
          type="email"
          placeholder=" e.g. stephenking@lorem.com"
          id="email"
        />
        <label for="phoneNo">Phone Number</label>
        <input type="tel" id="phoneNo" placeholder="  e.g. +1 234 567 890" />
      </form>

    
    </div>
  );
};

export default Personal;
