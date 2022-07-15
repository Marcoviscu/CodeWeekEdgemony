const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?with_genres=53&api_key=7a90f646e8bc9debee71e38dca588197";

const filmWrapper = document.querySelector(".main-wrapper-section");
const signInBtnEl = document.querySelector(".btn-sign-in");
const registered = document.querySelector(".register-signin");
const infoEl = document.querySelector(".modal");
const favFilm = document.querySelector(".favourite-film");
const userEmail = document.querySelector(".username-email");
const userPassword = document.querySelector(".username-password");
const form = document.querySelector(".form-sign-in");

form.addEventListener("submit", (event) => {
  localStorage.setItem("email", JSON.stringify(userEmail.value));
  localStorage.setItem("password", JSON.stringify(userPassword.value));
  event.preventDefault();
  registered.style.display = "none";
});

let film = [];

changeIcon = (event) => {
  if (event.target.getAttribute("class") === "fa-regular fa-star") {
    event.target.setAttribute("class", "fa-solid fa-star");
    console.log(event);
    // event.target.classList.remove("fa-regular.fa-star");
  } else if (event.target.getAttribute("class") === "fa-solid fa-star") {
    event.target.setAttribute("class", "fa-regular fa-star");
  }
  event.stopPropagation();
  console.log(event);
};

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    film = data.results;
    console.log(film);
    // Create CARD function
    film.forEach((el) => {
      const card = document.createElement("div");
      card.classList.add("film-card");
      filmWrapper.appendChild(card);
      card.innerHTML = `<i class="fa-regular fa-star" onclick="changeIcon(event)"></i> <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}">`;

      // MODAL
      card.addEventListener("click", function () {
        infoEl.classList.add("active");
        infoEl.innerHTML = `<div class='info-section'>
            <div class='info'>
              <div class="divOne">
                <img class="modal-img" height="80%" src="https://image.tmdb.org/t/p/w500/${el.poster_path}">
              </div>
              <div class="divThree">
                <p class="modal-title">${el.title}</p>
                <h2>Rating: ${el.vote_average} ⭐ </h2>
              </div>
              <div class='divTwo'>
                <iframe width ="500" height="300" src="https://www.youtube.com/embed/KAOdjqyG37A" title="Trailer demostration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in picture" allowfullscreen></iframe>
              </div>
              <div class="divFour">
                <p class="modal-overview">${el.overview}</p>
              </div>
              <div class='divFive'>
                <button class="close-btn">❌</button>
              </div>
            </div>`;

        const btnEl = document.querySelector(".close-btn");
        const addFav = document.querySelector(".add-fav");

        btnEl.addEventListener("click", function () {
          infoEl.classList.remove("active");
        });
      });
    });
  })
  .catch((err) => console.error(err));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// }
