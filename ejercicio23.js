const potencia = (base, exponente) =>{
    if (exponente==0)
        return 1;
    if (exponente==1){
        return base;
    }
    return base*potencia(base, exponente-1);
};
console.log(potencia(2, 3));