function addStyle(elementId, className) {
	document.getElementById(elementId).classList.add(className);
}

function removeStyle(elementId, className) {
	document.getElementById(elementId).classList.remove(className);
}

function addEffect(event) {
	const iconId = "icon-watchlist__regular";
	addStyle(iconId, "fa-bounce");
}

function removeEffect(event) {
	const iconId = "icon-watchlist__regular";
	removeStyle(iconId, "fa-bounce");
}

const watchListLink = document.querySelector("#watchListLink");
watchListLink.addEventListener("mouseover", addEffect);
watchListLink.addEventListener("mouseout", removeEffect);
