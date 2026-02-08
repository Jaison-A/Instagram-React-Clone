import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img
          className="text-logo mb-4"
          src="src/assets/Instagram_logo_text.png"
          alt="instagramText"
        />

        <div className="">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control shadow-sm"
              id="emailInput"
              placeholder="Mobile number, username or email"
            />
            <label htmlFor="emailInput">Mobile number, username or email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control shadow-sm"
              id="passwordInput"
              placeholder="Password"
            />
            <label htmlFor="passwordInput">Password</label>
          </div>

          <button
            onClick={() => navigate("/")}
            className="btn btn-primary w-100 fs-5 p-1"
          >
            Login
          </button>
        </div>
        <div className="m-3 text-center">OR</div>
      </div>
      <div>
        <button className="btn btn-outline-primary w-100 fs-6 p-1 mb-3 rounded-3">
          <i className="bi bi-facebook "></i> <span>Log in with Facebook</span>
        </button>
        <p className="text-center">Forget password?</p>
        <button className="btn btn-outline-secondary w-100 fs-6 rounded-3 p-1">
          Create a new account
        </button>
      </div>
    </div>
  );
}

export default Login;
