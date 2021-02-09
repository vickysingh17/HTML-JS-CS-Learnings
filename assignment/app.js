import { fetchShowsInfo } from './fetchShowsInfo.js';
const showsList = document.getElementById('showsList');
const searchBar = document.getElementById('searchBar');
const spinner = document.getElementById('spinner');

window.addEventListener('popstate', () =>  {
    window.history.forward(); 
    window.location = location.href;
});


const handlePageRedirect = (event) => {
  if(event.target.id === "showsList"){
    return
  }else {
    let showInfoItem = event.target.closest('.showInfo');
    let index = showInfoItem.getAttribute('data-cell-index')
    let url = new URL('http://127.0.0.1:5500/details.html');
    url.searchParams.set('index', index);
    showsFetched.then(shows => history.pushState(shows[index], null, url));
    window.location = url;
  }
  
} 

showsList.addEventListener('click' , handlePageRedirect);
 
const debounce = (func, delay) => { 
  let debounceTimer;
  return function(...args) {
      clearTimeout(debounceTimer) 
      debounceTimer = setTimeout(() => func(...args), delay) 
  } 
} 

const searchHandler = event => {
  let searchString = event.target.value.toLowerCase();
  showsArr.then(shows => {
    let filteredShowList = shows.filter(show => {
      return (
        show.title.toLowerCase().includes(searchString) ||
        show.description.toLowerCase().includes(searchString)
      );
    });
  displayShowsInfo(filteredShowList);
})
}

searchBar.addEventListener('input', debounce( searchHandler , 300));

const displayShowsInfo = (shows) => {
  let counter = -1;
  let htmlString = shows
    .map(show => {
      counter ++;
      return `
        <div class="showInfo" data-cell-index="${counter}">
          <img src="./img/posters/${show.poster}"></img>
          <section>
            <h3>${show.title}</h3>
            <h5>(${show.year})</h5>
            <p>${show.description}</p>
          </section>
        </div>`;
    })
    .join('');
  showsList.innerHTML = htmlString;
};

const showsFetched = fetchShowsInfo('https://demo0376970.mockable.io/movieslist');

showsFetched.then(shows => displayShowsInfo(shows))
.finally(()=> spinner.style.display="none");