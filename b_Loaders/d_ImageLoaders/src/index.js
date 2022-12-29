import _ from "lodash";
import style from './index.scss';
import './clearButton.js';
import logo from './assets/webpack.svg';

const btn1 = document.getElementById("btn1");
const logoEl = document.getElementById("logo");

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
logoEl.src = logo;
logoEl.style.width = "100px";