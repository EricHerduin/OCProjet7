import * as React from "react";
import { useParams } from "react-router-dom";
import { Dropdown } from "../lib/dropdown";
import { Rating, Tags, HostName, Title } from "../lib/logement_items";
import { Carousel } from "../lib/carousel";
import { getItem } from "../lib/routeGetItems";

export default function LogementPage() {
  const id = useParams();
  const listEquipments = getItem(id._id).equipments.map((data) => {
    return <li key={data.indexOf}>{data}</li>;
  });

  return (
    <div className="house__container">
      <Carousel
        data={getItem(id._id).pictures}
        nbpict={getItem(id._id).pictures.map((data) => data)}
      />
      <div className="container__house">
        <div className="container__house--info">
          <Title
            title={getItem(id._id).title}
            location={getItem(id._id).location}
          />
          <Tags data={getItem(id._id).tags} />
        </div>

        <div className="container__house--host">
          <HostName
            name={getItem(id._id).host.name}
            picture={getItem(id._id).host.picture}
          />
          <div className="container__house--rating">
            <Rating rating={getItem(id._id).rating} />
          </div>
        </div>
      </div>
      <div className="dropdownhouse">
        <Dropdown
          title="Description"
          classDropdown="dropdownhouse__item"
          description={getItem(id._id).description}
        />
        <Dropdown
          title="Equipements"
          classDropdown="dropdownhouse__item"
          description={<ul>{listEquipments}</ul>}
        />
      </div>
    </div>
  );
}
