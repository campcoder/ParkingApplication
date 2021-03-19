import React, { useState } from "react";
import "./SignIn.css";
import FormSignIn from "./FormSignIn";
import FormSuccess from "./FormSuccess";

const SignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-imgs" src="images/bike.jpg" alt="spaceship" />
          <button className="googlebutton" type="submit">
            Google Sign-In
          </button>
          <button className="facebookbutton" type="submit">
            Facebook Sign-In
          </button>
        </div>
        {!isSubmitted ? (
          <FormSignIn submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignIn;
