import { useState, useEffect } from "react";
import { FaPencilRuler, FaMapMarkerAlt, FaHeart, FaMapSigns } from "react-icons/fa";
import { motion } from "framer-motion";
import "./css/activitysection.css";

const activities = [
  {
    icon: <FaPencilRuler />,
    title: "Architecture",
    desc: "Conception de bâtiments résidentiels, commerciaux et industriels, alliant esthétique, confort et performance.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Consulting",
    desc: "Aménagement d’espaces urbains et de quartiers durables, optimisant l’utilisation des espaces publics.",
  },
  {
    icon: <FaHeart />,
    title: "Expertise",
    desc: "Accompagnement stratégique dans la gestion et l'optimisation de projets immobiliers et urbains.",
  },
  {
    icon: <FaMapSigns />,
    title: "Urbanisme",
    desc: "Études techniques et analyses pour assurer la faisabilité et la durabilité des projets immobiliers.",
  },
];

function ActivitySection() {
  const [page, setPage] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size to enable pagination only on small screens
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Mobile breakpoint
    };

    checkScreenSize(); // Check on load
    window.addEventListener("resize", checkScreenSize); // Check on resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextPage = () => {
    if (page < activities.length - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="activity-section">
      <h2 className="section-title">Nos Domaines d'Activité</h2>
      <div className="activity-container">
        {isSmallScreen ? (
          <motion.div
            className="activity-card"
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon">{activities[page].icon}</div>
            <h3 className="activity-title">{activities[page].title}</h3>
            <p className="activity-desc">{activities[page].desc}</p>
          </motion.div>
        ) : (
          activities.map((activity, index) => (
            <motion.div
              className="activity-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon">{activity.icon}</div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-desc">{activity.desc}</p>
            </motion.div>
            
          ))
        )}
      </div>

      {/* Pagination for Small Screens */}
      {isSmallScreen && (
        <div className="pagination">
          <button onClick={prevPage} disabled={page === 0}>
            &#8592;
          </button>
          <button onClick={nextPage} disabled={page >= activities.length - 1}>
            &#8594;
          </button>
        </div>
      )}
      
    </div>
  );
}

export default ActivitySection;
