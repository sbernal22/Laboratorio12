const acumulador = (valorInicial) =>{
    let total = valorInicial;
    const sumar =(valor) =>{
        total +=valor;
        return total;
    };
    return sumar;
};
const Acumulador = acumulador(10);
console.log(Acumulador(5));
console.log(Acumulador(3));
console.log(Acumulador(7));