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
        return <h3 className="container__house--tag-text">{tag}</h3>;
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
  const repeatrate = rate
    .filter((number) => number <= props.rating)
    .map((number) => {
      return {
        rate: number,
      };
    });
  const norate = rate
    .filter((number) => number <= 5 - props.rating)
    .map((number) => {
      return {
        rate: number,
      };
    });
  return (
    <div className="container__house--rate">
      {repeatrate.map((number) => {
        return <i class="fa-sharp fa-solid fa-star"></i>;
      })}
      {norate.map((number) => {
        return <i class="fa-sharp fa-solid fa-star fa-star__grey"></i>;
      })}
    </div>
  );
}
