window.onload = function(){
    //Todo lo que este aca, se va a ejecutar cuando ka pagina este cargada

    mostrarMensaje();
}

//Variables
const nombre = "Vicente";
let  apellido = "Villena";
var dirrecion = "238.23.107.120"
var edad = 30;

/*TypeScript
String nombrev2 = "";
Number edad = "69";*/

let Alumno = {
    nombre:"Cesaer",
    apellido: "Manidas",
    edad: 20,
    dirrecion: "Jr"
}

let Alumn2 = {
    nombre:"Vicente",
    apellido: "Villena",
    edad: 19,
    dirrecion: "Jr"
}

let arregloAlumno = [Alumno, Alumn2];
let ArregloNumeros = [1,2,3,4]

function mostrarMensaje(valor){
    alert("Hola "+valor)
}
