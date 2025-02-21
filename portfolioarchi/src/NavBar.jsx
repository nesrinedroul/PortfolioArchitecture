import { useState } from "react"; 
import './css/navbar.css';
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        
         {/* <img className="Logo" src={logo} alt="artist" />*/}
         <h1 className="logo">TS ARCHI DESIGN</h1>
        

        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined">
           menu
        </span>
        </button>
        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#activity">Activite</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
