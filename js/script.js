const numberOfFilms = +prompt('Скільки фільмів ви подивились?', '')
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

const a = prompt('Один з останніх фільмів', ''),
      b = +prompt('На скільки оціните?', ''),
      c = prompt('Один з останніх фільмів', ''),
      d = +prompt('На скільки оціните?', '');



personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb)



