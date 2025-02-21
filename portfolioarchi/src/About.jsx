import buildingImage from "./assets/aboutpic.jpg";
import "./css/AboutSection.css" // Replace with your image path
const AboutSection = () => {
  return (
    <div className="about-container" id="about">
      <div className="grid-overlay"></div>
      {/* Heading */}
      <h2 className="about-title">QUI SOMMES NOUS ?</h2>
      <div className="about-content">
        {/* Image with double-frame effect */}
        <div className="image-container">
          <img src={buildingImage} alt="Architecture" className="about-image" />
          <div className="yellow-frame"></div>
          <div className="black-frame"></div>
        </div>
        {/* Text Content */}
        <div className="text-content">
          <h3 className="expert-text">
            On est <span className="hollow-text-s">EXPERT</span>
          </h3>
          <p className="description">
          "Notre bureau d'architecture et d'ingénierie allie créativité et expertise technique pour donner vie à vos projets. Spécialisés en aménagement urbain, génie civil et conception architecturale, nous vous offrons des solutions sur mesure, alliant fonctionnalité, esthétisme et durabilité."
          </p>
          {/* Button */}
          <a href="#services"><button className="services-btn">Nos Services</button></a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
