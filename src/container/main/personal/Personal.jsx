import React from "react";

const Personal = () => {
  return (
    <div className="personal">
      <div>
        <h2>Personal info</h2>
        <p> Please provide your name, email address, and phone number.</p>
      </div>

      <form>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder=" e.g. Stephen King" />
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
