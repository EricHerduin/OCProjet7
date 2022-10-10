import React from "react";
import "../CSS/styles.css";
import { Link } from "react-router-dom";
import getItems from "../lib/routeGetItems";

class ListGallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        {getItems().map((number) => (
          <div className="gallery__card" key={number.id}>
            <Link to={`/logement/${number.id}`}>
              <div className="gallery__card--gradient"></div>
              <img
                className="gallery__card--img"
                src={number.cover}
                alt=""
              ></img>
              <h2 className="gallery__card--text" id={number.id}>
                {number.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export { ListGallery };
