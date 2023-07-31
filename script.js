// Add your code to this file

const body = document.getElementsByTagName("body")[0];
body.style["background-color"] = "#00008b";

const title = document.querySelector(".introduction h1");
title.style["text-decoration"] = "underline";

const subtitle = document.querySelector(".introduction h2");
subtitle.innerText = "Here are Pokemon's incredible Gen 1 starters!";
subtitle.style["text-align"] = "center";

const images = document.querySelectorAll(".pokemon_images, #starters_image_div img");
images.forEach(img => img.style["border"] = "dotted #ab8950");

const pokemon_names = document.getElementsByClassName("pokemon_names");
[...pokemon_names].forEach(name => {
	name.innerText += "!";
	name.style["color"] = "#f5eaa4";
});

const bulbasaur_desc = document.getElementById("bulbasaur_container");
bulbasaur_desc.style["background-color"] = "#388e8e";

const footer = document.getElementsByTagName("FOOTER")[0];
footer.innerText = "All Star Code - DOM Project";
footer.style["text-decoration"] = "underline overline 2px";
footer.style["font-size"] = "28px";

