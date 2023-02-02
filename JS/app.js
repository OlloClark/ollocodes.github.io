const body = document.querySelector("body")
const topNav = document.querySelector("#topNav");

body.addEventListener("wheel", navScroll);

function navScroll () {
	topNav.style.display = "flex";
};
