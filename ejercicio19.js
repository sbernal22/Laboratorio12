const mostrarDatos= (nombre, edad, ...hobbies) =>{
    console.log("Nombre: "+ nombre);
    console.log("Edad: "+ edad);
    console.log("Hobbies:");
    for (let i=0; i<hobbies.length; i++){
        console.log("- "+ hobbies[i]);
    }
};
mostrarDatos("Carlos", 25, "Jugar fútbol", "Programar", "Leer");