import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div style={{ backgroundColor: "brown" }}>
      <h1>Tasty Meals</h1>
      <a href="#" style={{ margin: "20px", color: "white" }}>
        {" "}
        Home
      </a>
      <a href="#" style={{ margin: "20px", color: "white" }}>
        {" "}
        Order
      </a>
      <a href="#" style={{ margin: "20px", color: "white" }}>
        {" "}
        Contact Us
      </a>
    </div>
  );
}
export default Navbar;
