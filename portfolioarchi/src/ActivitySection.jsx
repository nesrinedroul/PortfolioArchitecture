import { useState, useEffect } from "react";
import { FaPencilRuler, FaMapMarkerAlt, FaHeart, FaMapSigns } from "react-icons/fa";

const activities = [
  { icon: <FaPencilRuler />, title: "Architecture", desc: "Conception de bâtiments résidentiels, commerciaux et industriels, alliant esthétique, confort et performance" },
  { icon: <FaMapMarkerAlt />, title: "Consulting", desc: "Aménagement d’espaces urbains et de quartiers durables, optimisant l’utilisation des espaces publics" },
  { icon: <FaHeart />, title: "Expertise", desc: "Accompagnement stratégique dans la gestion et l'optimisation de projets immobiliers et urbains" },
  { icon: <FaMapSigns />, title: "Urbanisme", desc: "Études techniques et analyses pour assurer la faisabilité et la durabilité des projets immobiliers" },
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
    <div className="activity-section" id="activity">
      <div className='overlay'>
         <h2 className="section-title">Nos Domaines dActivité</h2>

       <div className={`activity-container ${isSmallScreen ? "single" : "inline"}`}>
        {isSmallScreen ? (
          <div className="activity-single">
            <div className="icon">{activities[page].icon}</div>
            <h3>{activities[page].title}</h3>
            <p>{activities[page].desc}</p>
          </div>
        ) : (
          activities.map((activity, index) => (
            <div className="activity-inline" key={index}>
              <div className="icon">{activity.icon}</div>
              <div className="content">
                <h3>{activity.title}</h3>
                <p>{activity.desc}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination - Visible Only on Small Screens */}
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
    </div>
  );
}

export default ActivitySection;