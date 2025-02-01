import { useState } from "react";
import "./css/ProjectsPagination.css";

const projects = [
  {
    id: 1,
    title: "Amenagement du mosquee ",
    description: "This is a description about the project.",
    date: "29-10-2020",
    image: "src/assets/projet1.png",
    pdf: ["src/pdfs/project-one.pdf"],
  },
  {
    id: 2,
    title: "Amenagement Center",
    description: "This is a brief description of Project Two.",
    date: "15-05-2021",
    image: "src/assets/projet2.png",
    pdf: ["src/pdfs/project-two-one.pdf", "src/pdfs/project-two-two.pdf"],
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
