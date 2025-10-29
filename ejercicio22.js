const descargarArchivo = (url, callback) =>{
    console.log("Descargando...");
    callback(url);
};
const descargaCompleta = (url) =>{
    console.log("Descarga completa de "+url);
};
descargarArchivo("https://a.com/archivo.pdf", descargaCompleta);