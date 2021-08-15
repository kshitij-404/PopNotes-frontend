const body = document.querySelector("body");

const apiUrl = "https://popnotes.herokuapp.com";

window.addEventListener("load", () => {
  body.classList.add("visible");
});

particlesJS.load("particles-js", "particlesjs-config.json");

const dark_light = document.querySelector(".dark-light");

dark_light.addEventListener("click", (event) => {
  body.classList.toggle("dark-mode");
});

const signInForm = document.querySelector(".left-form");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const signInEmail = document.querySelector(".email");
  const signInPassword = document.querySelector(".password");

  const email = signInEmail.value;
  const password = signInPassword.value;

  fetch(`${apiUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/Notes/";
      } else {
        alert("SignIn Again");
      }
    })
    .catch((err) => {
      alert("Error Signing In!!! Re-try....");
      console.log(err);
    });
});

const signUpForm = document.querySelector(".right-form");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector(".register-mail").value;
  const name = document.querySelector(".enter-name").value;
  const password = document.querySelector(".register-password").value;
  const retypedPassword = document.querySelector(
    ".confirm-password"
  ).value;

  if (password !== retypedPassword) {
    alert("Passwords don't match");
    return;
  }

  fetch(`${apiUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/Notes/";
      } else {
        alert("SignUp Again");
      }
    })
    .catch((err) => {
      alert("Error Signing Up!!! Re-try....");
      console.log(err);
    });
});