import _ from "lodash";

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  const el = document.getElementById("header");
  el.innerHTML = "Code updated";

  const listItems = ["Apple", "orange", "banana"];
  const ul = document.getElementById("shoppingList");
  listItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });
});