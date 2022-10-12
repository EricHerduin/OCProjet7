import Header from "../components/header";
import Footer from "../components/footer";
import SectionImage from "../components/sectionHeaderImage";
import { Dropdown } from "../lib/dropdown";
import TextData from "../database/text.json";
import "../css/styles.css";

function About() {
  return (
    <div className="main">
      <div>
        <Header about={"underline"} />
        <SectionImage class="sectionHeaderImgAbout" />
        <div className="container">
          {TextData.map((item) => (
            <Dropdown
              title={item.title}
              description={item.description}
              classDropdown="dropdownAbout"
              key={item.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
