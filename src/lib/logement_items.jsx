import React from "react";

export function Title({ title, location }) {
  return (
    <div className="container__house--main">
      <h2 className="container__house--title">{title}</h2>
      <p className="container__house--location">{location}</p>
    </div>
  );
}

export function Tags({ data }) {
  return (
    <div className="container__house--tag">
      {data.map((tag) => {
        return (
          <h3 className="container__house--tag-text" key={tag}>
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

export function Rate(props) {
  const rate = [1, 2, 3, 4, 5];
  return (
    <div className="container__house--rate">
      {rate
        .filter((number) => number <= props.rating)
        .map((number) => {
          const key = number.indexOf;
          return (
            <i className="fa-sharp fa-solid fa-star" key={number.indexOf}></i>
          );
        })}
      {rate
        .filter((number) => number <= 5 - props.rating)
        .map((number) => {
          const key = number.indexOf;
          return (
            <i
              className="fa-sharp fa-solid fa-star fa-star__grey"
              key={key}
            ></i>
          );
        })}
    </div>
  );
}

export function Rating(props) {
  const rate = [1, 2, 3, 4, 5];
  console.log(props.rating);
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
