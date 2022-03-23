////NAVBAR
// select items
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const navLinks = document.querySelectorAll(".nav__links");
const navIcons = document.querySelectorAll(".nav__icon");
const navbar = document.querySelector("nav");

//smooth scroll
// anchorLinks.forEach((link) => {
//   link.addEventListener("click", smoothScroll);
// });

// function smoothScroll(event) {
//   event.preventDefault();
//   const targetId =
//     event.currentTarget.getAttribute("href") === "#"
//       ? "home"
//       : event.currentTarget.getAttribute("href");
//   document.querySelector(targetId).scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// }

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navLinks.forEach((link2) => {
//       link2.classList.remove("nav__links--active");
//     });
//     link.classList.add("nav__links--active");
//   });
// });

// navIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     navLinks.forEach((icon2) => {
//       icon2.classList.remove("nav__icon--active");
//     });
//     link.classList.add("nav__icon--active");
//   });
// });

/////CONTATO

const form = document.getElementById("contact__form");

async function handleSubmit(e) {
  const status = document.getElementById("submit__message");
  e.preventDefault();
  const data = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Obrigada!";
      setTimeout(() => (status.innerHTML = ""), 4000);
      form.reset();
    })
    .catch((error) => {
      setTimeout(() => (status.innerHTML = ""), 4000);

      status.innerHTML = "Houve um erro.";
    });
}
form.addEventListener("submit", handleSubmit);

// copy to clipboard
const copyLink = document.querySelector(".copy");

copyLink.addEventListener("click", (e) => {
  e.preventDefault();
  const copyText = document.querySelector(".copy__text");
  copyText.focus();
  copyText.select();
  document.execCommand("copy");
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiado";
  setTimeout(() => (tooltip.innerHTML = "Copiar"), 4000);
});
