function showModal() {
	modal.style.display = "block";
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

let myLibrary = [];

function Media(title, type, category, watched) {
	this.title = title;
	this.type = type;
	this.category = category;
	this.watched = false;
}

function addMediaToLibrary(e) {
	e.preventDefault();
	const newCard = document.createElement("div");
	newCard.classList.add("card");
	cards.appendChild(newCard);
	modal.style.display = "none";

	const cardTitle = document.createElement("h2");
	cardTitle.innerText = title.value;
	newCard.appendChild(cardTitle);

	const cardType = document.createElement("h2");
	cardType.innerText = type.value;
	newCard.appendChild(cardType);

	const cardCategory = document.createElement("h2");
	cardCategory.innerText = category.value;
	newCard.appendChild(cardCategory);

	const cardRead = document.createElement("h2");

	if (watched.checked) {
		cardRead.classList.add("watched");
		cardRead.innerText = "Watched";
	} else {
		cardRead.classList.add("not-watched");
		cardRead.innerText = "Not Watched";
	}
	newCard.appendChild(cardRead);

	const cardRemove = document.createElement("button");
	cardRemove.classList.add("remove-media");
	cardRemove.innerText = "Remove";
	newCard.appendChild(cardRemove);

	cardRemove.addEventListener("click", removeCard);
	function removeCard() {
		newCard.style.display = "none";
	}
}
