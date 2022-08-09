
first: for ( let i = 2; i < 20; i++){
    for(let j = 2; j < i; j++){
    if(i % j === 0) continue first;
    }
    console.log(i);
}