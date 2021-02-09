let topDetails = document.getElementById('topDetails');
let backBtn = document.querySelector('.topContainer > button');
let spinner = document.getElementById('spinner');
let trailerWrapper = document.querySelector('.trailerWrapper');

backBtn.addEventListener('click' , () => {
    window.history.back();
})


window.onpopstate = function(e) {
    window.location = './index.html';
}

async function processShowRequest() {
    
    let showDetails = window.history.state;
    let response = await fetch(`http://www.omdbapi.com/?i=${showDetails.imdbID}&apikey=1ac8c8eb`);
    let movieInfo = await response.json();
    
    topDetails.innerHTML = 
        `<div class = "movieTitle">${showDetails.title}</div>
        <div class = "movieDetails">(${showDetails.year})</div>
        <div class = "movieDetails">Rating ${movieInfo.imdbRating}</div>
        <div class = "movieDetails">${showDetails.description} </div>
        <button>Play</button>`

    trailerWrapper.innerHTML = 
        `<iframe src="https://www.youtube-nocookie.com/embed/${showDetails.trailer}?control=0&autoplay=1" id="trailer" frameborder="0" allowfullscreen></iframe>`
    spinner.style.display = "none";

}

processShowRequest();