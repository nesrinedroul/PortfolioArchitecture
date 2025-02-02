
import "./css/Footer.css";  // Import the CSS file
  // Import the logo image
const Footer = () => {
  return (
    <footer>
      {/* Footer Content */}
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
         <h1>Portfolio</h1>
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
        <p>&copy; 2025 bureau d'etude s'architecture | All Rights Reserved</p>
        <h4>Email : architech.techno@gmail.com </h4>
        <h4>Tel : 0781265209 / 0556581954 </h4>
        <p>
          <a href="mailto:architech.techno@gmail.com">Email Me</a>
        </p>
        <p>
          Follow me on
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"> Facebook</a> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
