
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { fetchTrending } from './js/fetchApi';
import { render } from './js/renderCard';



    // .finally(() => {
    //   searchForm.reset();


// const filmsListHtml = document.querySelector(".movieadd");

// let tempImageUrl = "";

// fetchApi();

// async function fetchApi(){
//   try {
//     fetchApiConfig();
//     fetchApiTrending(1)
//         .then(film => {
    
//           const filmDetailsHtml = document.querySelectorAll(".film-details");
//           filmDetailsHtml.forEach(el => {
//         //  / fetchApiGetDetailsFilm(el)
//       })
//     })
//   } catch (error) {
//     console.log("fetchApi: ", error);
//   }
// };


// async function fetchApiConfig(){
//   try {
//     const params = new URLSearchParams({
//       api_key: API_KEY_V3
//     });
//     const response = await fetch(API_URL + "configuration" + "?" + params);
//     const config = await response.json();
//     tempImageUrl = config.images.base_url + config.images.poster_sizes[3];
//   } catch (error) {
//     console.log("fetchApiConfig: ", error);
//   }
// };


// async function fetchApiTrending(page){
//   try {
//     const params = new URLSearchParams({
//       api_key: API_KEY_V3,
//       page: page,
//     });
//     const response = await fetch(API_URL + "trending/" + "movie/" + "day" + "?" + params);
//     const film = await response.json();
//     let imageLink = tempImageUrl + film.results[0].poster_path;
//     let filmItems = "";
//     film.results.forEach(result => {
//       filmItems+=`
//       <li class="film-item">
//         <img class="film-image" src="${tempImageUrl}${result.poster_path}"></img>
//         <p class="film-title">${result.title}</p>
//         <p class="film-details" data-film_id="${result.id}"></p>
//       </li>
//       `
//     });
//       filmsListHtml.innerHTML = filmItems;
//     return film
//   } catch (error) {
//     console.log("fetchApiTrending: ", error);
//   }
// };

const container = document.getElementById('pagination');
const options = { // below default value of options
     totalItems: 1000,
     itemsPerPage: 5,
     visiblePages: 5,
     page: 1,
     centerAlign: false,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};
const pagination = new Pagination(container, options);

pagination.on('afterMove', (event) => {
  const currentPage = event.page;
 fetchTrending(currentPage)
  .then(({ data } ) => {
   console.log(data);
    render(data.results);
   
    })
    .catch(error => console.log(error))
});
