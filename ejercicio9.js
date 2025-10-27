const calcularDescuento=function(precio, porcentaje){
    return precio-precio*porcentaje/100;
}
console.log(calcularDescuento(100, 10));