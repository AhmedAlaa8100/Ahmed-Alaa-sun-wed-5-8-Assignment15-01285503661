export function displayGames(games) {
  console.log(games);
  let cartona = "";

  for (let i = 0; i < games.length; i++) {
    cartona += `
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="game-card p-2 border border-1 h-100 bg-dark text-white rounded-3" data-id="${games[i].id}">
          <img src="${games[i].thumbnail}" alt="" class="w-100 rounded">
          <div class="gametitle d-flex justify-content-between my-2">
            <span>${games[i].title}</span>
            <div class="fp bg-info p-1 px-2 rounded-2 text-dark small">Free</div>
          </div>
          <p class="small">${games[i].short_description}</p>
          <div class="gameinfo border-top pt-2 d-flex justify-content-between small">
            <div class="fp bg-secondary px-2 py-1 rounded-2">${games[i].genre}</div>
            <div class="fp bg-secondary px-2 py-1 rounded-2">${games[i].platform}</div>
          </div>
        </div>
      </div>
    `;
  }
  const row = document.querySelector(".gamesList .row");
  row.innerHTML = cartona;
}

export function displayDetails(game) {
  document.querySelector(".gamesList").classList.add("d-none");
  document.querySelector(".games").classList.add("d-none");

  document.getElementById("modalTitle").innerText = `Details: ${game.title}`;
  document.getElementById("modalBody").innerHTML = `
    <img src="${game.thumbnail}" class="img-fluid rounded mb-3" />
    
    <ul class="list-group mb-3">
      <li class="list-group-item bg-dark text-white"><strong>Title:</strong> ${game.title}</li>
      <li class="list-group-item bg-dark text-white"><strong>Category:</strong> ${game.genre}</li>
      <li class="list-group-item bg-dark text-white"><strong>Platform:</strong> ${game.platform}</li>
      <li class="list-group-item bg-dark text-white"><strong>Status:</strong> ${game.status}</li>
    </ul>

    <div class="bg-secondary p-3 rounded text-white">
      <h6>Description:</h6>
      <p>${game.description}</p>
    </div>
  `;
  document.getElementById("gameLink").href = game.game_url;

  const modal = new bootstrap.Modal(document.getElementById("gameModal"));
  modal.show();

  document.getElementById("gameModal").addEventListener(
    "hidden.bs.modal",
    () => {
      document.querySelector(".gamesList").classList.remove("d-none");
      document.querySelector(".games").classList.remove("d-none");
    },
    { once: true }
  );
}
