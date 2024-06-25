import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import auroraBackground from "../src/assets/aurora-effect-img.png";

function App() {
  return (
    <div class="aurora" style={{ backgroundImage: `url(${auroraBackground})` }}>
      <div class="aurora-overlay"></div>
      <div class="opaque"></div>
      <Navbar />
      <div
        style={{
          padding: "2rem",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Welcome to the Aurora Navbar Demo</h1>
        <p>
          Enjoy the beautiful Aurora background effect on the navigation bar!
        </p>
      </div>
    </div>
  );
}

export default App;
