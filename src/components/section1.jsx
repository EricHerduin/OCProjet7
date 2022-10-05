import Img from "../assets/IMG.jpg";
import "../CSS/styles.css";
import Gallery from "../components/gallery";


export default  function Section1() {
    return (
        <div className="body">
        <div className="section1">
        <img className="section1__img" src={Img} alt=""/>
                <div className="section1__darken"></div>
                <p className="section1__text">Chez vous, partout et ailleurs</p>
                
        </div>
        <Gallery/>
        
        </div>
    )
}
