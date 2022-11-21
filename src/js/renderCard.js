export { render };

const filmsListHtml = document.querySelector(".grid");

function render(cards) {
       const markup = cards.map((results) => {
        console.log(results);
        return `
              <li class="card">
                <figure >
                  <div class="thumb">
                    <img class="img" src="https://image.tmdb.org/t/p/w500/${results.poster_path}" />
                  </div>
                  <figcaption>
                    <h3 class="title">${results.title}</h3>
                    <div class="details-wrapper">
                      <p class="details" data-film_id="${results.id}"></p>
                      <div class="rating rating--visible"></div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              `
          })
    .join('');
        filmsListHtml.insertAdjacentHTML('beforeend', markup);
    };
