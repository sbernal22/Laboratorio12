const filtrarArreglo=(arr, callback) =>{
    let resultado=[], contador=0;
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            resultado[contador]= arr[i];
            contador++;
        }
    }
    return resultado;
};
const esPar=(numero) => numero%2==0;
console.log(filtrarArreglo([1, 2, 3, 4, 5], esPar));