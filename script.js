'use strict';

let burger = document.getElementById("burger");
let navigationPanel = document.getElementById("navigationPanel");
let actions = document.getElementsByTagName("a");

for (const a of actions) {
    a.addEventListener("click", function () {
        if (window.innerWidth < 700) {
            navigationPanel.classList.toggle("expandet")
        }
    })
}

burger.addEventListener("click", function () {
    navigationPanel.classList.toggle("expandet")
})