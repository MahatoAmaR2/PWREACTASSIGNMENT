import React from "react";
import "./sign.css";

function Signup() {
  function formHandle(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="logo">
        <h1>Instagram</h1>
      </div>
      <div className="form_content">
        <form onSubmit={formHandle}>
          <input type="text" placeholder="MOBILE NUMBER OR EMAIL" required />
          <input type="text" placeholder="FULL NAME" required />
          <input
            type="text"
            placeholder="PHONE NUMBER, USERNAME, OR EMAIL"
            required
          />
          <input type="password" placeholder="PASSWORD" required />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
}
export default Signup;
