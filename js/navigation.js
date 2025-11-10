const menuBtn = document.getElementById("bars");
const nav = document.querySelector("header nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
