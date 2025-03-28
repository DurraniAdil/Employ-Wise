import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const ProtectedRoute = ({ element }) => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      {window.location.pathname !== "/login" && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
