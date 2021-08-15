const body = document.querySelector("body");
const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get("noteId");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const dark_light = document.querySelector(".dark-light");

dark_light.addEventListener("click", (event) => {
  body.classList.toggle("dark-mode");
});

console.log(noteId);

const updateNoteButton = document.querySelector(".create-notes-button");

const apiUrl = "https://popnotes.herokuapp.com/";

const token = localStorage.getItem("jwt");

updateNoteButton.addEventListener("click", () => {
  const content = document.querySelector(".create-notes-input").value;
  const heading = document.querySelector(".create-notes-heading").value;

  if (token) {
    fetch(`${apiUrl}/note/update/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content, heading }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/Notes/";
        }
      })
      .catch((err) => {
        alert("Error Creating Note!! Re-try....");
        console.log(err);
      });
  }
});

particlesJS.load("particles-js", "particlesjs-config.json");
