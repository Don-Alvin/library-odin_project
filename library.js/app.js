const showMediaButton = document.querySelector(".add-media");
const modal = document.querySelector(".modal-card");
const submit = document.getElementById("submit");

showMediaButton.addEventListener("click", showModal);
submit.addEventListener("click", addMediaToLibrary);

//Form Values

const title = document.getElementById("title");
const type = document.getElementById("type");
const category = document.getElementById("category");
const watched = document.getElementById("watch");
const cards = document.getElementById("grid-container");
