const topNav = document.querySelector("#topNav");

window.addEventListener("scroll", navScroll);

function navScroll () {
	topNav.style.display = "flex";
};
