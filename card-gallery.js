import cards from "./cards.js";

function displayCards(filteredCards) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  filteredCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    const path = buildCardPath(card);
    cardElement.innerHTML = `<img src="${path}" alt="${card.name}" onclick="showPopup('${path}')">`;
    gallery.appendChild(cardElement);
  });
}

function buildCardPath(card) {
  let path = "";
  switch (card.color) {
    case "green":
      path = "ambientaciones";
      break;
    case "red":
      path = "personajes";
      break;
    case "blue":
      path = "mecánicas";
      break;
    default:
      break;
  }
  return (
    "./img/" +
    path +
    "/" +
    card.name.toLowerCase().replace(":", "").split(" ").join("-") +
    ".png"
  );
}

function filterByType(type) {
  const filtered = cards.filter((card) => card.type.includes(type));
  displayCards(filtered);
}

function filterCards(txt) {
  const filtered = cards.filter((card) => card.name.toLowerCase().includes(txt));
  displayCards(filtered);
}

function showPopup(src) {
  document.getElementById("popupImg").src = src;
  document.getElementById("popup").classList.add("show");
}

function hidePopup() {
  document.getElementById("popup").classList.remove("show");
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll("button")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

displayCards(cards);

window.showPopup = showPopup;
window.filterByType = filterByType;
window.hidePopup = hidePopup;
window.filterCards = filterCards;
