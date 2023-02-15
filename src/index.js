import data from "./data";
import "./index.css";

const root = document.querySelector("#app");
const background = document.querySelector(".background-image");
const input = document.querySelector(".range");
const audio = document.querySelector("#audio");
input.addEventListener("input", changeValue);

function change(id) {
  const [item] = data.filter((item) => item.id === id);
  background.className = `background-image img_${id}`;
  const elem = root.querySelector(`.img_${id}`);
  startStopAudio(elem, item.audio);
}

function changeValue() {
  audio.volume = input.value / 100;
}

function startStopAudio(el, src) {
  if (audio.src !== src) {
    const items = root.querySelectorAll("li");
    items.forEach((item) => (item.innerText = ""));
    audio.src = src;
    audio.play();
  } else if (audio.classList.contains("pause")) {
    audio.play();
    el.innerText = "";
    audio.classList.toggle("pause");
  } else {
    audio.pause();
    el.innerText = "II";
    audio.classList.toggle("pause");
  }
}

function renderItem(item) {
  const li = document.createElement("li");
  li.setAttribute("id", item.id);
  li.classList.add(`img_${item.id}`);
  li.addEventListener("click", () => change(item.id));
  root.append(li);
}

data.forEach(renderItem);
