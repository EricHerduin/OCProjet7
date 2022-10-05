import Items from "../lib/route";

export default function ListGallery() {
  let cardItem;

  console.log(Items);
  for (let i = 0; i < Items.length; i++) {
    const item = `<div class="gallery_item">
        <p>${Items.title}</p></div>`;

    cardItem += item;
  }
  console.log(cardItem);

  return cardItem;
}
