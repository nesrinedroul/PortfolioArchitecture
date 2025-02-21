import { motion } from "framer-motion";
import { Button } from "@mui/material"; // Material-UI for buttons
import "./css/herosection.css";
import background from "./assets/background.jpg";

const HeroSection = () => {
  const titleText = "Des idées qui prennent forme"; // Highlight the architectural vision
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <div className="hero-section">
      {/* Background Video */}
      {/* Subtle blueprint-like background */}
      <div className="grid-overlay"></div>
      <div className="floating-circle"></div>
      <div className="floating-line"></div>

      {/* Content */}
      <div className="hero-content">
        {/* Title */}
        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
        >
          {titleText.split("").map((letter, i) => (
            <motion.span key={i} custom={i} variants={letterVariants}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Spécialiste en architecture, génie civil et aménagement urbain, je
          transforme vos idées en projets concrets. Avec une approche alliant
          innovation, durabilité et fonctionnalité, je vous accompagne de la
          conception à la réalisation, pour des espaces harmonieux et
          performants.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
        <a href="mailto:architech.techno@gmail.com?subject=Inquiry from Portfolio&body=Hello, I have a question regarding your services."> <Button variant="contained" className="btn-contact">
            Réservez un Rendez-vous
          </Button></a> 
         <a href="#projects"> <Button variant="outlined" className="btn-services">
            Voir mes Projets
          </Button></a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
