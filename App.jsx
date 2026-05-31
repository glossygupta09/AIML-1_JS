import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const containerStyle = {
    width: "500px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    overflow: "hidden",
    fontFamily: "Arial",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "cyan",
    padding: "18px",
  };

  function navItemStyle(tab) {
    return {
      color: activeTab === tab ? "yellow" : "white",
      fontWeight: activeTab === tab ? "bold" : "normal",
      fontSize: "18px",
      cursor: "pointer",
    };
  }

  const contentStyle = {
    textAlign: "center",
    padding: "30px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#666",
      }}
    >
      <div style={containerStyle}>
          <div style={navStyle}>
          <div
            style={navItemStyle("Home")}
            onClick={function () {
              setActiveTab("Home");
            }}
          > Home </div>
          <div
            style={navItemStyle("About")}
            onClick={function () {
              setActiveTab("About");
            }}
          > About </div>
          <div
            style={navItemStyle("Contact")}
            onClick={function () {
              setActiveTab("Contact");
            }}
          > Contact</div>
        </div>
        <div style={contentStyle}>
          
          {activeTab === "Home" && (
            <div>
              <h1 style={{ color: "grey" }}>
                Welcome to Home Page
              </h1>

              <p>
                This is the Home section of the website.
                Students can learn React basics here.
              </p>
            </div>
          )}

          {activeTab === "About" && (
            <div>
              <h1 style={{ color: "grey" }}>
                About Us
              </h1>

              <p>
                We provide modern React projects and
                learning materials for students.
              </p>
            </div>
          )}

          {activeTab === "Contact" && (
            <div>
              <h1 style={{ color: "grey" }}>
                Contact Information
              </h1>

              <p>Email: example@gmail.com</p>
              <p>Phone: +91 9876543210</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;