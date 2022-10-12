import Header from "../components/header";
import Footer from "../components/footer";
import SectionImage from "../components/sectionHeaderImage";
import { ListGallery } from "../components";
import "../css/styles.css";
import "https://kit.fontawesome.com/ef204fd57f.js";

export default function Index() {
  return (
    <div className="main">
      <Header accueil={"underline"} />
      <SectionImage
        class="sectionHeaderImg"
        text="Chez vous, partout et ailleurs"
      />
      <ListGallery />
      <Footer />
    </div>
  );
}
