import "../css/styles.css";

export default function SectionHeaderImg(props) {
  return (
    <div className={props.class}>
      <div className="sectionHeaderImg__darken"></div>
      <p className="sectionHeaderImg__text">{props.text}</p>
    </div>
  );
}
