const componerTransformaciones= (aMayusculas, aumentarSigno, texto="")=>{
    const transformar=()=>{
        texto=aMayusculas(texto);
        texto=aumentarSigno(texto);
        return texto;
    };
    return transformar;
};
const aMayusculas= (texto="")=>{
    return texto.toUpperCase();
};
const aumentarSigno=(texto="")=>{
    return texto+"!";
};
console.log(componerTransformaciones(aMayusculas, aumentarSigno, "texto"));