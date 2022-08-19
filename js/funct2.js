function getMathResult(a) {

    if (typeof(a) !== 'number' || a <= 0 ) {
        console.log("При вычислении произошла ошибка");
    }

    let str = "";
    let br = "";

        str += `${a * a * a}`;

        const b = 6;

        br += `${b * a * a}`;

        return `Площадь куба ${str}. Обьем полной поверхности куба ${br}`;


}

console.log(getMathResult(5));



