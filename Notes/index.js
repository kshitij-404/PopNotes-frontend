const body = document.querySelector("body");
const cardContainer = document.querySelector(".card-container");
const logout = document.querySelector(".log-out");
const createNoteButton = document.querySelector(".new-note");

const apiUrl = "https://popnotes.herokuapp.com";

const token = localStorage.getItem("jwt");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

window.addEventListener("load", () => {
  body.classList.add("visible");
});

let cardData = [];

createNoteButton.addEventListener("click", () => {
  location.href = "/Create/";
});


const createNotes = (array) => {
  cardContainer.innerHTML = "";

  array.forEach((cardObj) => {
    const { heading, content} = cardObj;
    const id = cardObj.noteId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><div class="edit-note"><a href="/Update/index.html?noteId=${id}">edit</a></div></div><div class="card-content">${content}</div>`;
    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);
  });
};

const dark_light = document.querySelector(".dark-light");

dark_light.addEventListener("click", (event) => {
  body.classList.toggle("dark-mode");
});

particlesJS.load("particles-js", "particlesjs-config.json");
