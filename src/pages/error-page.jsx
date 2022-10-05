import {useRouteError} from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import "../CSS/styles.css"

export default function ErrorPage() {
    const error = useRouteError();
    

    return(
        
        <div id="error-page">
            <Header/>
            <div className="error">
            <p className="error__number">404</p>
            <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
            <p className="error__link"><a href="/">Retourner sur la page d’accueil</a></p>
            </div>
            <Footer/>
        </div>
        
    );
}