import logo from "../assets/LOGO2_BW.svg";
import "../CSS/styles.css";


export default function Footer() {
    return (
       <div className="footer">
         <img className="footer__logo" src={logo} alt=""/>
         <p className="footer__text">© 2020 Kasa. All rights reserved</p>
       </div> 
    )
}

