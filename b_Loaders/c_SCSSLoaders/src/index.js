import _ from "lodash";
import style from './index.scss';
import './clearButton.js';

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

btn1.classList.add(style.button);