let numberOfFilms;


function start () {

    while ( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){

        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms(){

    for (let i = 0; i < 1; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
              if (a != null && b != null && a != "" && b != "" && a.length < 50 ){
                personalMovieDB.movies[a] = b;
                console.log("done");
              } else {
                console.log("error");
                i--;
              }
    }

}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (10 < personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

}

detectPersonalLevel();



function showMyDB(){

    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }

}

showMyDB();

let genr;

function writeYourGenres(){
    for (let i = 1; i<=3; i++){
        genr = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genr;

    }
}

writeYourGenres();

console.log(personalMovieDB);