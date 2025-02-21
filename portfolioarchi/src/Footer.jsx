import "./css/Footer.css";  // Import the CSS file
const Footer = () => {
  return (
    <footer>
      {/* Footer Content */}
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
         <h1>TS ARCHI DESIGN</h1>
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
          <a href="https://www.instagram.com/ts_archidesign" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
          <a href="https://www.facebook.com/share/19i4A2z1gj/" target="_blank" rel="noopener noreferrer"> Facebook</a> |
          <a href="https://www.tiktok.com/@archi.tech4?_t=ZM-8tirQ96O1pd&_r=1" target="_blank" rel="noopener noreferrer"> TikTok</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
