//Script Formulario
//Creo Clase
class Consulta {
    constructor(nombre, email, numero){
        this.nombre = nombre;
        this.email = email;
        this.numero = numero;
    }
}

//defino variables globales par DOM
let arrayConsulta = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#fNombre");



let nombreF = document.getElementById("fNombre").value;

let emailF = document.getElementById("fMail").value;

let numeroF = document.getElementById("fNumber").value;

let flag = false;

//Defino eventos de boton

miFormulario.addEventListener("submit", agregarConsulta);

inputNombre.focus();

//Funciones
function validarForm(){
    nombreF = document.getElementById("fNombre").value;
    // alert(nombreF);
    
    emailF = document.getElementById("fMail").value;
    // alert(emailF);
    
    numeroF = document.getElementById("fNumber").value;
    // alert(numeroF);
    // console.log(nombreF);
    // console.log(emailF);
    // console.log(numeroF);

    if (nombreF == '' || emailF == '' || numeroF == ''){
        alert("ERROR - Todos los campos tienen que estar completos.");
        inputNombre.focus();
        flag = false;
    }else{
        flag = true;
    }
}

//Funcion para Agregar Consultas al Array

function agregarConsulta(e){
    e.preventDefault();
    validarForm(); //Validacion del Form.
    if (flag == true){
        let opcion = confirm("Desea agregar la consulta?");
        if(opcion == true){
            let test = e.target
            arrayConsulta.push(new Consulta(nombreF, emailF, numeroF));
            console.log(test);
            
        }else{
            alert("No se agregara consulta");
        }
        limpiarFormulario();
        inputNombre.focus();
        console.log(arrayConsulta);
    }else{
        inputNombre.focus();
    }
    }


function limpiarFormulario() {
        document.getElementById("formulario").reset();

}    
