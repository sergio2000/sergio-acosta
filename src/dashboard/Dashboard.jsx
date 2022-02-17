import React from "react";
import Thumbnail from "./thumbnail.js";
import "./blog.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <h1 className="dash-logo">News</h1>
        <div className="thumbnail-container">
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
