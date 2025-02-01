import "./css/Services.css";
import architecture from "./assets/ArchitectureService.jpg";
import client from "./assets/ClientServices.jpg";
import chantier from "./assets/rapportchentier.jpg";
import design from "./assets/designinterieur.jpg";   
import permis from "./assets/permisService.jpg";
const services = [
    {
      title: "ARCHITECTURE",
      description:
      "conception d’espaces et organisation fonctionelle , maitrise complete du processus pour un projet soigne jusqu’aux details , proposition et mise en place des solutions durables et efficientes",
      image: architecture,
      reverse: false,
    },
    {
      title: "ACCOMPAGNEMENT DES CLIENT",
      description:
        "Gestion centralisée des projets et assistance à lamaîtrise d'ouvrage, avec conseil à chaque étapedu projet.",
      image: client,
      reverse: true,
    },
    {
      title: "ÉLABORATION DES DIFFÉRENTS RAPPORTS DE CHANTIERS",
      description:
        "Documenter, analyser l'avancement des travaux en assurant un suivi détaillé des interventions, des ressources utilisées, des incidents et de conformités aux plans et délais.",
      image: chantier,
      reverse: false,
    },
    {
      title: "PRÉSENTATION DE DESIGN INTÉRIEUR ET DÉCORATION DES ESPACES",
      description:
        "Aménager et embellir un lieu en optimisant son agencement, couleurs, ses matériaux et son mobilier, pour créer des environnements harmonieux confortables et adaptés aux besoins des utilisateurs.",
      image: design,
      reverse: true,
    },
    {
      title: "ÉLABORATION DE PERMIS",
      description:
        "Par création des plans avec annotation des différentes rubriques en respectant les règles d’urbanisme en vigueur.",
      image: permis,
      reverse: false,
    },
  ];
  
  const Services = () => {
    return (
      <div className="services-container" id="services">
        <h1 className="services-title">Nos Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card ${service.reverse ? "reverse" : ""}`}
              key={index}
            >
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
                 <a href="mailto:architech.techno@gmail.com?subject=Inquiry from Portfolio&body=Hello, I have a question regarding your services.">
        <button className="contact-button">contacter nous</button>
      </a>
                <div className="image-border-cross"></div>
              </div>
              <div className="service-content">
  <div className="service-title-container">
    <div className="yellow-line"></div>
    <h2 className="service-title">{service.title}</h2>
  </div>
  <p className="service-description">{service.description}</p>
</div>

            </div>
          ))}
        </div>
      </div>  
    );
  };
  
export default Services;
