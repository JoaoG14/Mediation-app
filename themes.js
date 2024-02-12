function checkSettings() {
  html.id = themeSelected;
  selected.innerHTML = themeSelected;
  selectedStyle.innerHTML = styleSelected;
}

window.onload = checkSettings;

const selected = document.querySelector(".selected-theme");
const themesContainer = document.querySelector(".options-container-themes");
const html = document.documentElement;

let themeSelected = localStorage.getItem("themeSelected");

const themesList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  themesContainer.classList.toggle("active");
});

themesList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    themesContainer.classList.remove("active");
    themeSelected = o.querySelector("label").innerHTML;
    html.id = o.querySelector("label").innerHTML;
    console.log(themeSelected);
    localStorage.setItem("themeSelected", o.querySelector("label").innerHTML);
  });
});

const selectedStyle = document.querySelector(".selected-style");
const stylesContainer = document.querySelector(".options-container-styles");

let styleSelected = localStorage.getItem("styleSelected");

const stylesList = document.querySelectorAll(".style-option");

selectedStyle.addEventListener("click", () => {
  stylesContainer.classList.toggle("active");
});

stylesList.forEach((o) => {
  o.addEventListener("click", () => {
    selectedStyle.innerHTML = o.querySelector("label").innerHTML;
    stylesContainer.classList.remove("active");
    styleSelected = o.querySelector("label").innerHTML;
    localStorage.setItem("styleSelected", o.querySelector("label").innerHTML);
    console.log(styleSelected);
  });
});
