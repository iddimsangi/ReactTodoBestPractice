import React from "react";
import logo from '../../img/logo.svg'
import "./Form.scss";
function Form() {
  return (
    <div className="form-box">
      <form>
        <h1>SIGN UP</h1>
        <div class="icon">
        <img src={logo} alt="logo-svg"/>
      </div>
        <div className="formcontainer">
          <div className="container">
            <label htmlFor="uname">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <label htmlFor="mail">
              <strong>E-mail</strong>
            </label>
            <input
              type="text"
              placeholder="Enter E-mail"
              name="mail"
              required
            />
            <label htmlFor="psw">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>
          <button type="submit">
            <strong>SIGN UP</strong>
          </button>
          <div className="container">
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
            <span className="psw">
              <a href="#">Forgot password?</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
