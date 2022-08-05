const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');



const personalMovieDB = {
    count : numberOfFilms,
    movies :{
    },
    actors :{
    },
    genres :[],
    privat : false
};

const firstQuation = prompt('Один из послдених просмотренных фильмов?', '');

const secondQuation = +prompt('На сколько его оцените?', '');

personalMovieDB.movies[firstQuation] = secondQuation;
console.log(personalMovieDB);