const operacionesMatematicas = () => {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;    
    const dividir = (a, b) =>{
        if (b ==0){
            return "Error";
        }
        return a/b;
    };
    return sumar;
};
const sumar = operacionesMatematicas();
console.log(sumar(5, 3));