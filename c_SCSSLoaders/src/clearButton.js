import style from './clearButton.scss'

const el = document.createElement("button");
el.innerHTML = "Clear";
el.classList.add("button");
el.addEventListener("click", () => {
  alert("Clear button clicked");
});
el.classList.add(style.button);
document.body.appendChild(el);


