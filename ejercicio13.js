function procesarTexto(texto){
    function limpiarEspacios(str){
        let resultado = "";
        for(let i = 0; i <str.length; i++){
            if(str[i] !== " "){
                resultado = resultado + str[i];
            }
        }
        return resultado;
    }
    function contarPalabras(str){
        let contador = 0;
        let enPalabra = false;
        for(let i = 0; i < str.length; i++){
            if(str[i] !== ' '){
                if(!enPalabra){
                contador++;
                enPalabra = true;
                }
            } 
            else{
                enPalabra = false;
            }
        }
        
        return contador;
    }
    let textoLimpio = limpiarEspacios(texto);
    let numPalabras = contarPalabras(texto);
    return textoLimpio + " Palabras: " + numPalabras;
    }
    let resultado = procesarTexto("Texto de prueba");
    console.log(resultado);