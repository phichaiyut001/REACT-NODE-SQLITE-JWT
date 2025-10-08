import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:8000/api/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessage(response.data.message);
      } catch (error) {
        console.error("Authentication Error", error);
        handlelogout();
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title">{message}</h2>
              <p>You JWT is Vaild.</p>
              <button onClick={handlelogout} className="btn btn-danger">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
