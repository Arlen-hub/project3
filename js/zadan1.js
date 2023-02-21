function c(n){
    let result = '';
    C:
    for (i = 2; i <= n; i++){
    for (j = 2; j < i; j++){
    if( i % j == 0){
        continue C;
    }
    }
    if (i === n){
        console.log(n)
    }
}
}
c(23)
    
    
   