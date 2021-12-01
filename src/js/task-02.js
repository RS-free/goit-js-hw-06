const ingredList = document.querySelector("#ingredients");
console.log(ingredList);
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newItems = ingredients.map((element) => {
  const newItem = document.createElement("li");
  newItem.textContent = element;
  return newItem;
});
ingredList.append(...newItems);
