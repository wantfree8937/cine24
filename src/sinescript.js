// function searchMovie() {

// }

// fetchMovieData = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2U1NzkwNDYxZjE0Y2MwNWMxYzA0MzIwNTE4YzQ2YSIsInN1YiI6IjY2Mjc5ZTBkYjlhMGJkMDBjZGQ0NGI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SN8whoS0_yG-gt7xue2f_CXakEcDCse_H4sgO3CmoyA'
//         }
//     };

//     fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }

// fetchMovieData = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2U1NzkwNDYxZjE0Y2MwNWMxYzA0MzIwNTE4YzQ2YSIsInN1YiI6IjY2Mjc5ZTBkYjlhMGJkMDBjZGQ0NGI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SN8whoS0_yG-gt7xue2f_CXakEcDCse_H4sgO3CmoyA'
//         }
//     };

//     const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
//     const data = await response.json();
//     return data;

// }


// function createMovieCards () {
//     const resourceTemplate = document.

// }

// 2차 //
fetchMovieData = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2U1NzkwNDYxZjE0Y2MwNWMxYzA0MzIwNTE4YzQ2YSIsInN1YiI6IjY2Mjc5ZTBkYjlhMGJkMDBjZGQ0NGI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SN8whoS0_yG-gt7xue2f_CXakEcDCse_H4sgO3CmoyA'
        }
    };

    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const data = await response.json();
    return data.results;
}

createMovieCard = (movie) => {
    const movieContainer = document.getElementById('movie_Container');
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie_card');

    const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // 포스터 받아오기
    const moviePoster = document.createElement('img');
    moviePoster.classList.add('movie-poster');
    moviePoster.src = posterURL;
    moviePoster.alt = movie.title;

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info');

    const movieTitle = document.createElement('div');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = movie.title;

    const movieRating = document.createElement('div');
    movieRating.classList.add('movie-rating');
    movieRating.textContent = `Rating: ${movie.vote_average}`;

    const movieOverview = document.createElement('div');
    movieOverview.classList.add('movie-overview');
    movieOverview.textContent = movie.overview;

    movieInfo.appendChild(movieTitle);
    movieInfo.appendChild(movieRating);
    movieInfo.appendChild(movieOverview);
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieInfo);
    movieContainer.appendChild(movieCard);
}

(async () => {
    const movies = await fetchMovieData();
    movies.forEach(movie => createMovieCard(movie));
})();

// 3차
// fetchMovieData = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2U1NzkwNDYxZjE0Y2MwNWMxYzA0MzIwNTE4YzQ2YSIsInN1YiI6IjY2Mjc5ZTBkYjlhMGJkMDBjZGQ0NGI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SN8whoS0_yG-gt7xue2f_CXakEcDCse_H4sgO3CmoyA'
//         }
//     };

//     try {
//         const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
//         const data = await response.json();
//         return data.results;
//     } catch (err) {
//         console.error(err);
//         return [];
//     }
// }

// createMovieCard = (movie) => {
//     const card = document.createElement('div');
//     card.classList.add('movie-card');

//     const title = document.createElement('div');
//     title.classList.add('movie-title');
//     title.textContent = movie.title;

//     const rating = document.createElement('div');
//     rating.classList.add('movie-rating');
//     rating.textContent = `Rating: ${movie.vote_average}`;

//     card.appendChild(title);
//     card.appendChild(rating);

//     return card;
// }

// displayMovies = async () => {
//     const moviesContainer = document.getElementById('movies-container');
//     moviesContainer.innerHTML = ''; // Clear previous content

//     const movies = await fetchMovieData();
//     movies.forEach(movie => {
//         const card = createMovieCard(movie);
//         moviesContainer.appendChild(card);
//     });
// }

// displayMovies();
