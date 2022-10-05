import Header from "../components/header";
import Footer from "../components/footer";
import SectionAbout from "../components/about";
import "../CSS/styles.css";


function About() {
  return (
    <div className="main">
      <Header/>
      <SectionAbout/>
      <Footer/>
    </div> 
);
}

export default About;