import React from "react";
import "./sign.css";

function Login(props) {
  return (
    <>
      <div className="logo">
        <h1>Instagram</h1>
      </div>
      <div className="form_content">
        <form>
          <input
            type="text"
            placeholder="PHONE NUMBER, USERNAME, OR EMAIL"
            required
          />
          <input type="password" placeholder="PASSWORD" required />
          <button className="button">Sign in</button>
        </form>
      </div>
    </>
  );
}
export default Login;
