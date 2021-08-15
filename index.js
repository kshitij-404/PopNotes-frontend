const body = document.querySelector("body");
const signInSignUpButton = document.querySelector(".register-sign-in");

window.addEventListener("load", () => {
  body.classList.add("visible");

  const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/Notes/";
  }
});

particlesJS.load("particles-js", "particlesjs-config.json");

const dark_light = document.querySelector(".dark-light");

dark_light.addEventListener("click", (event) => {
  body.classList.toggle("dark-mode");
});

