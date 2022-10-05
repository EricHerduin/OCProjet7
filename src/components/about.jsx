import "../CSS/styles.css";

import "https://kit.fontawesome.com/ef204fd57f.js";
import logo from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";

export default function Sectionabout() {
    return(
        <div className="body">
            <div className="section1">
                <img className="section1__img" src={logo} alt=""/>
                <div className="section1__darken"></div>    
            </div>
            <div className="container">
                <div className="dropdown">
                    <button className="dropdown__button"></button>
                    <div className="dropdown__title">
                        <div>
                            <h2 className="dropdown__h2">Fiabilité</h2>
                        </div>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="dropdown__text">
                        <p className="dropdown__text--p">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown__button"></button>
                    <div className="dropdown__title">
                        <div>
                            <h2 className="dropdown__h2">Respect</h2>
                        </div>               
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="dropdown__text">
                        <p className="dropdown__text--p">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown__button"></button>
                    <div className="dropdown__title">
                        <div>
                            <h2 className="dropdown__h2">Service</h2>
                        </div>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="dropdown__text">
                    <p className="dropdown__text--p">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown__button"></button>
                    <div className="dropdown__title">
                        <div>
                            <h2 className="dropdown__h2">Sécurité</h2>
                        </div>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="dropdown__text">
                    <p className="dropdown__text--p">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}