import React from "react";
import Login from "./Login.jsx";
function Home() {
  return (
    <>
      <div className="d-flex vh-100">
        <div className="w-50">
          <p className="h1 mt-2 px-5">
            See everyday moments from your close friends.
          </p>
          <div className="mt-2">
            <img
              className="home-img"
              src="src\assets\login-img1.png"
              alt="login-img"
            />
          </div>
        </div>

        <div className="p-5 w-50 border border-primary">
          <Login />
        </div>
      </div>
    </>
  );
}

export default Home;
