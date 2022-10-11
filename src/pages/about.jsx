import Header from "../components/header";
import Footer from "../components/footer";
import SectionImage from "../components/sectionHeaderImage";
import { Dropdown } from "../lib/dropdown";
import TextData from "../database/text.json";
import "../CSS/styles.css";

function About() {
  return (
    <div className="main">
      <Header about={"underline"} />
      <SectionImage class="sectionHeaderImgAbout" />
      <div className="container">
        {TextData.map((item) => (
          <Dropdown
            title={item.title}
            description={item.description}
            classDropdown="dropdownAbout"
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default About;
