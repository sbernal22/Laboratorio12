const media = (...numeros) =>{
    let suma =0;
    for (let i = 0; i < numeros.length; i++){
        suma +=numeros[i];
    }
    return suma/numeros.length;
};
console.log(media(5, 3, 7, 1, 2, 9, 5, 6, 10));