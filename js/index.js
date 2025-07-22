import Details from "./details.js";
import Games from "./games.js";
import { displayDetails, displayGames } from "./UI.js";

async function loadCategory(category) {
  const games = new Games(category);
  const list = await games.getList();
  displayGames(list);
  attachGameCardListeners();
}

async function loadDetails(id) {
  const gameDetails = new Details(id);
  const data = await gameDetails.getDetails();
  displayDetails(data);
  console.log(data);
}

loadCategory("mmorpg");

var links = document.querySelectorAll("li");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    const category = e.target.dataset.category;
    loadCategory(category);
  });
}

function attachGameCardListeners() {
  const row = document.querySelector(".gamesList .row");
  const gameCards = row.querySelectorAll(".game-card");
  for (let card of gameCards) {
    card.addEventListener("click", () => {
      const gameId = card.getAttribute("data-id");
      loadDetails(gameId);
    });
  }
}
