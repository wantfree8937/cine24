let allMovies = [];

// TMDB API에서 영화 제목을 가져와 배열 생성
fetch_MovieData = async () => {

    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2U1NzkwNDYxZjE0Y2MwNWMxYzA0MzIwNTE4YzQ2YSIsInN1YiI6IjY2Mjc5ZTBkYjlhMGJkMDBjZGQ0NGI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SN8whoS0_yG-gt7xue2f_CXakEcDCse_H4sgO3CmoyA'
        }
    });
    const jsondata = await response.json();
    return jsondata.results;
}

// 영화 카드 만들기
create_MovieCard = (movie) => {
    const movieContainer = document.getElementById('movie_Container');
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie_card');

    // 영화 카드 클릭시 알림
    movieCard.addEventListener('click', () => {
        alert(`영화 id: ${movie.id}`);
    });

    const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // 포스터 받아오기
    const moviePoster = document.createElement('img');

    // 영화 카드에 요소들 추가
    moviePoster.classList.add('movie_poster');
    moviePoster.src = posterURL;
    moviePoster.alt = movie.title;

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie_info');

    const movieTitle = document.createElement('div');
    movieTitle.classList.add('movie_title');
    movieTitle.textContent = movie.title;

    const movierating = document.createElement('div');
    movierating.classList.add('movie_rating');
    movierating.textContent = `rating: ${movie.vote_average}`;

    const moviepopularity = document.createElement('div');
    moviepopularity.classList.add('movie_popularity');
    moviepopularity.textContent = `popularity: ${movie.popularity}`;

    const movieReleasedate = document.createElement('div');
    movieReleasedate.classList.add('movie_release_date');
    movieReleasedate.textContent = `release date: ${movie.release_date}`;

    const movieOverview = document.createElement('div');
    movieOverview.classList.add('movie_overview');
    movieOverview.textContent = movie.overview;

    movieInfo.appendChild(movieTitle);
    movieInfo.appendChild(movierating);
    movieInfo.appendChild(moviepopularity);
    movieInfo.appendChild(movieReleasedate);
    movieInfo.appendChild(movieOverview);

    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieInfo);

    movieContainer.appendChild(movieCard);
}

(async () => {
    allMovies = await fetch_MovieData(); // 새로고침 시 영화 데이터를 한 번만 가져온다 
    allMovies.forEach(movie => create_MovieCard(movie)); // 영화 카드 생성
})();

search_Movie = async (ev) => { // 이벤트 객체를 매개변수로 받는다

    ev.preventDefault(); // form에 의한 새로고침을 막음

    const movieContainer = document.getElementById('movie_Container'); // id: movie_Container의 요소를 가져옴

    // 이전에 표시된 영화 카드들 삭제
    movieContainer.innerHTML = '';

    // 검색된 영화 목록 생성
    const Moviefilter = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(document.getElementById('search_input').value.toLowerCase())
    );

    Moviefilter.forEach(movie => {
        create_MovieCard(movie);
    });
    
    return false; // form에 의한 새로고침을 막음
}

// 인기순 정렬
popular_Sort = () => {
    const movieContainer = document.getElementById('movie_Container');

    movieContainer.innerHTML = '';

    // 영화 인기도로 오름차순 정렬
    const sortedMovies = allMovies.slice().sort((a, b) => b.popularity - a.popularity);

    sortedMovies.forEach(movie => {
        create_MovieCard(movie);
    });
}

// 오래된순 정렬
old_Sort = () => {
    const movieContainer = document.getElementById('movie_Container');

    movieContainer.innerHTML = '';

    // 영화 날짜로 내림차순 정렬
    const sortMovie = allMovies.slice().sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

    sortMovie.forEach(movie => {
        create_MovieCard(movie);
    });
}

// 투명 검색 버튼 활성화/비활성화
toggle_SearchButton = () => {
    const searchInput = document.getElementById('search_input');
    const searchButton = document.getElementById('search_button');
    
    if (searchInput.value !== '') {
        searchButton.disabled = false;
        searchButton.style.cursor = "pointer";
    } else {
        searchButton.disabled = true;
        searchButton.style.cursor = "default";
    }
}