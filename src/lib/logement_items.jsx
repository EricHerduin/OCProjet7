import React from "react";

export function Title({ title, location }) {
  return (
    <div className="container__house--main">
      <h2 className="container__house--title">{title}</h2>
      <p className="container__house--location">{location}</p>
    </div>
  );
}

export function Tags({ data, index }) {
  return (
    <div className="container__house--tag">
      {data.map((tag, index) => {
        return (
          <h3 className="container__house--tag-text" key={index}>
            {tag}
          </h3>
        );
      })}
    </div>
  );
}

export function HostName({ name, picture }) {
  return (
    <div className="container__house--owner">
      <p className="container__house--owner-name">{name}</p>

      <img className="container__house--owner-img" src={picture} alt=""></img>
    </div>
  );
}

export function Rating(props) {
  const rate = [1, 2, 3, 4, 5];
  return (
    <div className="container__house--rate">
      {rate.map((number, index) => {
        return number <= props.rating ? (
          <i className="fa-sharp fa-solid fa-star" key={index}></i>
        ) : (
          <i
            className="fa-sharp fa-solid fa-star fa-star__grey"
            key={index}
          ></i>
        );
      })}
    </div>
  );
}
