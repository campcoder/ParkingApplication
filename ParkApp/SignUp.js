import React, { useState } from "react";
import "./SignUp.css";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="images/reg.jpg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignUp;
