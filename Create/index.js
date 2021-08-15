const body = document.querySelector("body");
const createNoteButton = document.querySelector(".create-notes-input");

const apiUrl = "https://popnotes.herokuapp.com";

const token = localStorage.getItem("jwt");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const dark_light = document.querySelector(".dark-light");

dark_light.addEventListener("click", (event) => {
  body.classList.toggle("dark-mode");
});

createNoteButton.addEventListener("click", () => {
  const content = document.querySelector(".create-notes-input").value;
  const heading = document.querySelector(".create-notes-heading").value;

  if (token) {
    fetch(`${apiUrl}/note/add`, {
      method: "POST",
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
