const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
let i,j;

    for (i = 0; i <lines ;i++){
    for (j = 0; j < lines - i; j++){
      result += " ";
    }
    // if(i % 2 === 1 ){
      for (j = 0; j < i * 2 + 1; j++){
        result = result + '*';
    }
    result += '\n';
    // }

}
console.log(result);