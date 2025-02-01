import React from "react";
import "./css/Footer.css";  // Import the CSS file

const Footer = () => {
  return (
    <footer>
      {/* Footer Content */}
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="src/assets/logohammiche 1.png" alt="Your Logo" />
        </div>

        {/* Contact Form Section */}
        <div className="footer-contact">
          <form action="mailto:architech.techno@gmail.com" method="post" enctype="text/plain">
            <input
              type="text"
              name="message"
              placeholder="Your message here..."
              required
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>

      {/* Essential Footer Information */}
      <div className="footer-info">
        <p>&copy; 2025 Your Name | All Rights Reserved</p>
        <p>
          <a href="mailto:architech.techno@gmail.com">Email Me</a>
        </p>
        <p>
          Follow me on
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
