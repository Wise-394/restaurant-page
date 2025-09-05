import "./styles.css";
import { homeInit } from './home.js';
import { menuInit } from "./menu.js";
const contentDiv = document.querySelector("#content");

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => switchTab("menu"));

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => switchTab("home"));

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => switchTab("about"))



function switchTab(tab) {
    clearContent();
    switch (tab) {
        case "home":
            contentDiv.className = "home";
            homeInit(contentDiv);
            break;
        case "menu":
            contentDiv.className = "menu";
            menuInit(contentDiv);
            break;
        case "about":
            contentDiv.className = "about";
            menuInit(contentDiv);
            break;
    }

    function clearContent() {
        contentDiv.innerHTML = "";
    }
}
(function onPageStart(){
    switchTab("home")
}
)();


