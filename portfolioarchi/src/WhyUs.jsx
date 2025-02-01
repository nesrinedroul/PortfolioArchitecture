import "./css/WhyUs.css"; // Import the CSS file
const WhyUs = () => {
  return (
    <section className="why-us">
      {/* Background Image - Left Side */}
      <div className="why-us-image">
        <img src='src/assets/whyus.png' alt="Architectural Background" />
      </div>

      {/* Text Content - Right Side */}
      <div className="why-us-content">
        <h2 className="section-title">Pourquoi nous ?</h2>
        <div className="why-us-list">
          {[
            "Expertise pluridisciplinaire",
            "Approche sur-mesure",
            "Engagement envers la qualité",
            "Accompagnement global",
          ].map((text, index) => (
            <div key={index} className="why-us-item">
              <span className="why-us-number">{`0${index + 1}`}</span>
              <p className="why-us-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
