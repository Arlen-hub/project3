function getMathResult(a) {

    if (typeof(a) !== 'number' || a <= 0 || !Number.isInteger(a) ) {
        console.log("При вычислении произошла ошибка");
    }

    let str = "";
    let br = "";

        str += `${a * a * a}`;

        br += `${6 * a * a}`;

        return `Площадь куба ${str}. Обьем полной поверхности куба ${br}`;


}

console.log(getMathResult(5));

function getCoupeNumber(k) {

    if (typeof(k) !== 'number' || k <= 0 || !Number.isInteger(k) ) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }

    if ( 0 > k >= 36) {
        console.log("Таких мест в вагоне не существует");
    }

    let vag = "";

    for ( let i = 4; i <= k; i +=4 ){
        vag += `${i / 4}`; 
    }

    return vag;

}

getCoupeNumber(6);



