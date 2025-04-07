import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <img className="logo" src="logo.jpg" />
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`links ${isOpen ? "active" : ""}`}>
        <Link to="/Home">Home</Link>
        <Link to="/ConferenceTheme">Conference Theme</Link>
        <Link to="/Calls">Call for Papers</Link>
        <Link to="/Schedule">Schedule</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Register">Register Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;