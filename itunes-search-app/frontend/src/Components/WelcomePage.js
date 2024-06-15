import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/WelcomePage.css";

/**
 * WelcomePage Component
 * This component displays a welcome message and a button that navigates to the Home page.
 */
const WelcomePage = () => {
  const navigate = useNavigate(); 

    // Handle the button click to navigate to the Home page
  const handleStartSearch = () => {
    navigate("/Home"); 
  };

  return (
    <div className="welcome-page-container">
      <h1>Welcome to iTunes</h1>
      <div className="continue-btn-container">
        <button className="continue-btn" onClick={handleStartSearch}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
