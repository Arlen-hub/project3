function c(n){
    C:
    for (i = 2; i <= n; i++){
    for (j = 2; j < i; j++){
    if( i % j == 0){
    continue C;
    }
    }
    console.log(i)
}
}
c(50)