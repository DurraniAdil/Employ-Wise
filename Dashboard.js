import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, name: "John Doe", role: "Software Engineer" },
        { id: 2, name: "Jane Smith", role: "Product Manager" },
        { id: 3, name: "David Johnson", role: "UX Designer" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Team Dashboard</h1>
      
      {loading ? (
        <p className="loading-text">Fetching Data...</p>
      ) : (
        <div className="user-cards">
          {data.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
