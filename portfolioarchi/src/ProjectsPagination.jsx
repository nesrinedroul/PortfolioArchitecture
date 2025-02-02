import { useState } from "react";
import "./css/ProjectsPagination.css";
import mosque from "./assets/mosque.png";
import centre from "./assets/projet2.png";
import projet1 from "./pdfs/project-one.pdf"
import projet2 from "./pdfs/project-two-one.pdf"
import projet3 from "./pdfs/project-two-two.pdf"
const projects = [
  {
    id: 1,
    title: "aménagement mosquée ",
    description: "Ce plan détaille l’agencement du deuxième étage du bâtiment, comprenant Des bureaux optimisés pour le travail administratif et commercial. Des salles de réunion dédiées aux échanges professionnels et à la coordination. Un espace d’accueil et d’attente conçu pour recevoir les visiteurs et collaborateurs. Des sanitaires séparés pour le confort des usagers. Un espace café destiné à la détente du personnel. Des zones techniques réseau, stockage, maintenance garantissant un fonctionnement fluide des infrastructures. Un ascenseur et des issues de secours assurant accessibilité et sécurité. L’aménagement repose sur une approche ergonomique et moderne, utilisant des matériaux tels que l’acier, l’aluminium et des panneaux composites pour assurer à la fois durabilité et esthétisme.",
    date: "29-10-2020",
    image: mosque,
    pdf: projet1,
  },
  {
    id: 2,
    title: "aménagement Center",
    description: "Ce plan représente la structure technique et architecturale du bâtiment, incluant l’organisation des espaces, les fondations et les éléments techniques nécessaires à la construction. Il sert de référence pour l’intégration des différents aménagements intérieurs et extérieurs, garantissant une conception solide et conforme aux normes.",
    date: "15-05-2021",
    image: centre ,
    pdf: [projet2 , projet3],
  },
];

const ProjectsPagination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    setSelectedProject(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project.id === selectedProject ? null : project.id);
  };

  const handleDownload = (pdfs) => {
    pdfs.forEach((pdf) => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = pdf.split("/").pop();
      link.click();
    });
  };

  return (
    <div className="projects-container"id="projects">
      <h2 className="section-title">Nos Projets</h2>

      <div className="project-slider">
        <button className="custom-btn left" onClick={handlePrev}>❮</button>

        <div className="project-card" onClick={() => handleProjectClick(projects[currentIndex])}>
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="project-image"
          />
          <div className="project-overlay">
            <span className="project-date">{projects[currentIndex].date}</span>
            <h3 className="project-title">{projects[currentIndex].title}</h3>
          </div>
        </div>

        <button className="custom-btn right" onClick={handleNext}>❯</button>
      </div>

      {selectedProject !== null && (
        <div className="project-details">
          <p className="project-description">{projects.find(p => p.id === selectedProject).description}</p>
          <button
            className="download-btn"
            onClick={() => handleDownload(projects.find(p => p.id === selectedProject).pdf)}
          >
            Download PDFs
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPagination;
