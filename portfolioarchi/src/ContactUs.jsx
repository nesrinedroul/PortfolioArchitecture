import "./css/ContactUs.css"; // Import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-container" id="contact">
      {/* Overlay */}
      <div className="grid-overlay"></div>

      {/* Text & Button */}
      <div className="contact-content">
        <h2 className="hollow-text">BESOIN DE NOS SERVICES ?</h2>
        <h3 className="cta-text">COMMENCER MAINTENANT</h3>
        <a href="mailto:architech.techno@gmail.com?subject=Inquiry from Portfolio&body=Hello, I have a question regarding your services.">
        <button className="contact-btn">Contacter nous</button>
      </a>
      </div>
    </div>
  );
};

export default ContactUs;
