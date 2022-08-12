// const lines = 5;
let ab= "";
let i,j;

for (i = 0; i <5 ;i++){
    for (j = 0; j < 5 - i; j++){
      ab += " ";
    }
    // if(i % 2 === 1 ){
      for (j = 0; j < i * 2 + 1; j++){
        ab = ab + '*';
    }
    ab += '\n';
    // }

}
console.log(ab);