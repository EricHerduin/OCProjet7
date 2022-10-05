async function items() {
  const response = await fetch("http://localhost:4200/api/");
  const items = await response.json();
  console.log(items);
  return items;
}

export default items;
