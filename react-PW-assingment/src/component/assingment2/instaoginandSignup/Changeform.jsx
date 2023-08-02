import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./sign.css";
function Changeform() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleSign = () => {
    setLogin(false);
  };
  return (
    <>
      {login ? (
        <div className="sign_up_form">
          <Login />
          <div className="have_account">
            <p>
              have an account? <a onClick={handleSign}>Sign up</a>
            </p>
          </div>
        </div>
      ) : (
        <div className="sign_up_form">
          <Signup />
          <div className="have_account">
            <p>
              have an account? <a onClick={handleLogin}>Log in</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default Changeform;
