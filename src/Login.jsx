import React from "react";

function Login() {
  return (
    <div className="d-flex">
      <div className="w-30">
        <img src="src\assets\login-img1.png" alt="login-img" />
      </div>
      <div>
        <img
          className="text-logo"
          src="src/assets/Instagram_logo_text.png"
          alt="instagramText"
        />
        <input type="text" placeholder="Phone number, username, or email" />
        <input type="password" placeholder="Password" />
        <button>Log In</button>
        <div>OR</div>
      </div>
      <div>
        <i class="bi bi-facebook"></i> <p>Log in with Facebook</p>
        <p>Forget password?</p>
        <p>Don't have an account?</p>Sign up
      </div>
    </div>
  );
}

export default Login;
