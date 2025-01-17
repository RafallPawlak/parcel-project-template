const API_KEY_V3 = "bdba5342660bdd1dac5d09b885091a0c";
const API_KEY_V4 = "";
const API_URL = "https://api.themoviedb.org/3/";

const filmsListHtml = document.querySelector(".movieadd");

let tempImageUrl = "";


fetchApi();

async function fetchApi(){
  try {
    fetchApiConfig();
    fetchApiTrending(1)
        .then(film => {
    
          const filmDetailsHtml = document.querySelectorAll(".film-details");
          //console.log("fetchApi -> fetchApiTrending.then here forEach start to get film details with fetchApiGetDetailsFilm methode");
          filmDetailsHtml.forEach(el => {
          fetchApiGetDetailsFilm(el)
      })
    })
  } catch (error) {
    console.log("fetchApi: ", error);
  }
};

// ------------------get image link methode---------------------
async function fetchApiConfig(){
  try {
    const params = new URLSearchParams({
      api_key: API_KEY_V3
    });
    const response = await fetch(API_URL + "configuration" + "?" + params);
    const config = await response.json();
   // console.log("fetchApiConfig object content:", config);
    tempImageUrl = config.images.base_url + config.images.poster_sizes[3];
   // console.log("function fetchApiConfig base url to get img:", tempImageUrl);
  } catch (error) {
    console.log("fetchApiConfig: ", error);
  }
};

// -------------------get trending films-----------------------
async function fetchApiTrending(pageN){
  try {
    const params = new URLSearchParams({
      api_key: API_KEY_V3,
      page: pageN,
    });
    const response = await fetch(API_URL + "trending/" + "movie/" + "day" + "?" + params);
    const film = await response.json();

    let imageLink = tempImageUrl + film.results[0].poster_path;
    //console.log("fetchApiTrending completed link to img:", imageLink);
   //console.log("fetchApiTrending forEach start to create HTML li>img tags");
    let filmItems = "";
    film.results.forEach(result => {
      filmItems+=`
      <li class="film-item">
        <img class="film-image" src="${tempImageUrl}${result.poster_path}"></img>
        <p class="film-title">${result.title}</p>
        <p class="film-details" data-film_id="${result.id}"></p>
      </li>
      `
    });
      filmsListHtml.innerHTML = filmItems;
    return film
  } catch (error) {
    console.log("fetchApiTrending: ", error);
  }
};
// --------------------get genres and year methode----------------------
async function fetchApiGetDetailsFilm(elHtml){
  try {
    const params = new URLSearchParams({
      api_key: API_KEY_V3
    });
    const response = await fetch(API_URL + "movie/" + elHtml.dataset.film_id + "?" + params)
    const filmDetails = await response.json();

    //console.log("fetchApiGetDetailsFilm object content:", filmDetails);
    let yearWithDate = new Date(filmDetails.release_date);
    const genresArray = filmDetails.genres.map(genre => {return genre.name});
    //console.log("genres array - result .map methode inside fetchApiGetDetailsFilm:", genresArray);
    elHtml.innerHTML = `${genresArray.join(", ")} &#124; ${yearWithDate.getFullYear()}`
  } catch (error) {
    console.log("fetchApiGetDetailsFilm: ", error);
  }
};


