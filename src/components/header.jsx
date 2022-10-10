import logo from "../assets/logo.svg";
import "../CSS/styles.css";

export default function Header(props) {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <nav className="nav">
        <ul>
          <li>
            <a
              className="nav__link"
              style={{ textDecoration: props.accueil }}
              href="/"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              style={{ textDecoration: props.about }}
              href="/about"
            >
              A propos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
