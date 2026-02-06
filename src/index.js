import "./styles.css";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
const content = document.getElementById("content");
const nav = document.querySelector("nav");

nav.addEventListener("click", (event) => {
    content.textContent = "";
    const page = event.target.dataset.page;
    if (page === "home") {
        loadHome();
    } else if (page === "menu") {
        loadMenu();
    } else if (page === "about") {
        loadAbout();
    }
});

loadHome();
