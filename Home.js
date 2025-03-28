import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to EmployWise</h1>
      <p>Your go-to platform for employee management.</p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
