

function apiCall() {
  $.getJSON('http://www.omdbapi.com/?apikey=1617ba7b');
}

$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
  axios.get('http://www.omdbapi.com/?apikey=1617ba7b&s=' + searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')"  class="btn btn-primary" href="#">Movie details</a>
            </div>
          </div>
        `;
      });
      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.php';
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com/?apikey=1617ba7b&i=' + movieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;
      let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
              <li class="list-group-item"><strong>Year:</strong>${movie.Year}</li>
              <li class="list-group-item"><strong>IMDB rating:</strong>${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Actors:</strong>${movie.Actors}</li>
              <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
              <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
              <li class="list-group-item"><strong>Plot:</strong>${movie.Plot}</li>
            </ul>
          </div>
        </div>
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function randomMovie() {

  var min = 0000000;
  var max = 9999999;
  var randNum = Math.round(Math.random() * (max - min) + min);
  var randMovieId = "tt" + randNum.toString();
  console.log(randMovieId);
  axios.get('http://www.omdbapi.com/?apikey=1617ba7b&i=' + randMovieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;
      let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
              <li class="list-group-item"><strong>Year:</strong>${movie.Year}</li>
              <li class="list-group-item"><strong>IMDB rating:</strong>${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Actors:</strong>${movie.Actors}</li>
              <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
              <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
              <li class="list-group-item"><strong>Plot:</strong>${movie.Plot}</li>
            </ul>
          </div>
        </div>
      `;
      while (!movie.imdbID) {
        console.log("NOPE");
        randomMovie();
      }
      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);

    });

}
