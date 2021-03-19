import React from "react";
import "./SignUp.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1
        style={{ position: "relative", top: "30%", textTransform: "uppercase" }}
        className="form-success"
      >
        Thanks for Signing Up!
      </h1>
    </div>
  );
};

export default FormSuccess;
