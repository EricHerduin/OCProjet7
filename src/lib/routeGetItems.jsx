import data from "../database/data.json";

export default function getItems() {
  return data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      cover: item.cover,
    };
  });
}

export const getItem = (id) => {
  return data.find((item) => item.id === id);
};
