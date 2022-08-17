function getMathResult(a,b) {

    if (typeof(b) !== 'number' || b <= 0) {
        return a;
    }

    let str = " ";

    for ( let i = 1; i <= b; i++){

        if(i === b){
            str += `${a * i}`;
        }else{
            str += `${a * i} ------`;
        }
        
    }

    return str;

}

console.log(getMathResult(5, 3));



