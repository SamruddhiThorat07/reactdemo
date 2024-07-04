import React from 'react';
import './index.css';

function RightSideDiv() {
  return (
    <div className="App">
      
    <nav className="navbar">
      <button className="logo-button">Logo</button>
      </nav>
    <div className="right-side-div">
      <div className="button-container">
        <button className="custom-button delete-button">
          <img src="/trash-03.png" alt="Delete" className="button-icon delete-icon" />
          <span>Delete job</span>
        </button>
        <button className="custom-button edit-button">
          <img src="/edit-02.png" alt="Edit" className="button-icon edit-icon" />
          <span>Edit job</span>
        </button>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <img src="/icon.png" alt="Applicants" className="stat-icon" />
          <span className="stat-label">Applicants</span>
          <span className="stat-value">400</span>
        </div>
        <div className="stat-item">
          <img src="/user-check-01.png" alt="Matches" className="stat-icon" />
          <span className="stat-label">Matches</span>
          <span className="stat-value">100</span>
        </div>
        <div className="stat-item">
          <img src="/message-square-01.png" alt="Messages" className="stat-icon" />
          <span className="stat-label">Messages</span>
          <span className="stat-value">147</span>
        </div>
        <div className="stat-item">
          <img src="/eye.png" alt="Views" className="stat-icon" />
          <span className="stat-label">Views</span>
          <span className="stat-value">800</span>
        </div>
      </div>
      <div className="quote-text">
        "A quote from a Atlassian."
      </div>
      <div className="profile-container">
        <img src="/Avatar.png" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <div className="profile-name">Name</div>
          <div className="profile-description">Description</div>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default RightSideDiv;
