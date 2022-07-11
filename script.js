const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?with_genres=53&api_key=7a90f646e8bc9debee71e38dca588197";

const filmCard = document.createElement("div");
filmCard.classList.add("film-card");

const filmWrapper = document.querySelector(".main-wrapper-section");
let film = [];

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    film = data.results;

    const img = film
      .map((el) => {
        filmWrapper.appendChild(filmCard);
        return `<div class='card'><img src="https://image.tmdb.org/t/p/w500/${el.poster_path}"></div>`;
      })
      .join("");

    filmCard.innerHTML = `${img}`;
  })
  .catch((err) => console.error(err));
