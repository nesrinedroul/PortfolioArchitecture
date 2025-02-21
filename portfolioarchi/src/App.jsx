import './css/herosection.css';
import HeroSection from './HeroSection'
import './css/main.css';
import NavBar from './NavBar';
import About from './About';
import ActivitySection from './ActivitySection';
import './css/ActivitySection.css';
import Services from './Services';
import ContactUs from './ContactUs';
import WhyUs from './WhyUs';
import ProjectsPagination from './ProjectsPagination';
import Footer from './Footer';
function App() {
  return (
    <>
     <NavBar />
     <HeroSection />
     <About/>
     <ActivitySection/>
     <Services/>
     <ContactUs/>
     <WhyUs/>
     <ProjectsPagination/>
     <Footer/>
    </>
  )
}

export default App ;
