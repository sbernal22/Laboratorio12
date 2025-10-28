const crearContador = () =>{
    let contador =0;
    const incrementar = () =>{
        contador++;
        console.log("Contador: " + contador);
        return contador;
    };
    const resetear = () =>{
        contador = 0;
        console.log("Contador: " + contador);
        return contador;
    };
    return [incrementar, resetear];
};
const contador= crearContador();
contador[0]();
contador[0]();