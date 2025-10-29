const crearSecuencia=(inicio, paso) =>{
    let actual=inicio;
    let llamada1=true;
    return () =>{
        if(llamada1){
            llamada1=false;
            return actual;
        }
        actual+=paso;
        return actual;
    };
};
const secuencia=crearSecuencia(2, 3);
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());