import { useEffect, useState } from "react";
import background from "./assets/background.png";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="hero-container" id="home">
      {/* Background Image with Overlay */}
      <div className="overlay"></div>

      {/* Content Section */}
      <div className={`hero-content ${isLoaded ? "fade-in" : ""}`}>
        {/* Title with Yellow Rectangle */}
        <div className="yellow-rectangle">
          <h1 className="hero-title">
            Besoin d’une expertise <br /> en architecture et urbanisme ?
          </h1>
        </div>

        {/* Description and Buttons Section */}
        <div className={`hero-description-container ${isLoaded ? "slide-in" : ""}`}>
          {/* Description Text */}
          <div className="hero-description">
            <p className="subtext">
              Spécialiste en architecture, génie civil et aménagement urbain, je transforme vos
              idées en projets concrets. Avec une approche alliant innovation, durabilité et
              fonctionnalité, je vous accompagne de la conception à la réalisation, pour des
              espaces harmonieux et performants.
            </p>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="mailto:architech.techno@gmail.com?subject=Inquiry from Portfolio&body=Hello, I have a question regarding your services.">
              <button className="contact-btn">contacter nous</button>
            </a>
            <div className="play-container">
              <a href="#services">
                <button className="play-btn">▶</button>
              </a>
              <span>Nos Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styling */}
      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          background: url(${background}) no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .hero-content {
         margin-top:6%;
          position: relative;
          z-index: 2;
          margin-left: 10%;
          color: white;
          max-width: 75%;
          padding: 0 20px;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-content.fade-in {
          opacity: 1;
        }

        .yellow-rectangle {
          border-top: 5px solid #e6b515;
          border-left: 5px solid #e6b515;
          border-bottom: 5px solid #e6b515;
          padding-left: 40px;
          padding: 50px;
          max-width: 43%;
          display: inline-block;
        }

        .hero-title {
          font-size: 2.5rem;
          color: #fff;
          -webkit-text-stroke: 1px #000;
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 1px;
          margin: 0;
        }

        .hero-description-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 20px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateX(-50px);
          transition: transform 1s ease-out, opacity 1s ease-out;
        }

        .hero-description-container.slide-in {
          opacity: 1;
          transform: translateX(0);
        }

        .hero-description {
          max-width: 50%;
        }

        .subtext {
          font-size: 1.2rem;
          line-height: 1.6;
          text-align: left;
          text-justify: inter-word;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin-top: 40px;
        }

        .contact-btn {
          padding: 12px 36px;
          font-size: 1.1rem;
          text-transform: uppercase;
          background: #e6b515;
          color: black;
          font-weight: bold;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .contact-btn:hover {
          background: #ffd700;
          transform: scale(1.05);
        }

        .play-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 5%;
        }

        .play-btn {
          width: 40px;
          height: 40px;
          background: black;
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .play-btn:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .hero-content {
          margin-top: 15%;
            margin-left: 5%;
            max-width: 90%;
          }

          .hero-description-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .yellow-rectangle {
            padding: 20px;
            max-width: 80%;
          }

          .hero-title {
            font-size: 2rem;
          }

          .subtext {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
          }

          .play-container {
            justify-content: center;
          }

          .contact-btn {
            padding: 10px 24px;
            font-size: 1rem;
          }

          .play-btn {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.5rem;
          }

          .subtext {
            font-size: 0.9rem;
          }

          .hero-description {
            max-width: 100%;
          }

          .hero-buttons {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
