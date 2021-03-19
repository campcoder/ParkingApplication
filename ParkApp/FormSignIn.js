import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./SignIn.css";
import { Link } from "react-router-dom";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h2>Sign-In</h2>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Sign-In
        </button>
        <a className="forgot">Forgot Password ?</a>
        <span className="form-input-login">
          New User ? Sign-Up <Link to="sign-up">here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
