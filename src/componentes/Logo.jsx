import React from "react";
import logo from "../image/freecodecamp.png";
import "../stylesheet/Logo.css"

function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img src={logo} className="freecodecamp-logo" alt="FreeCodeCamp Logo" />
    </div>
  );
}
export default Logo;
