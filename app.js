// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiar(){
    document.getElementById('amigo').value = '';
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function parametroInciales(){
    asignarTextoElemento('h2','Digite el nombre de sus amigos');
}

function insertarPersona(nuevaPersona){
    //Insertar nueva persona
    amigos.push(nuevaPersona);
}
function agregarAmigo(){
    //Recuperar persona ingresada
    let personaIngresada = document.getElementById('amigo').value;
    //Validar que no se ingrese un valor vacio
    if (personaIngresada != ''){
        //validar que no se inserte un mismo nombre
        if (amigos.some(persona => persona.toLowerCase() === personaIngresada.toLowerCase())){
            asignarTextoElemento('h2','Ya existe esta persona, ingrese segundo nombre o apellido para diferenciar');

        }else{
            //Insertar nueva persona
            insertarPersona(personaIngresada);
            limpiar();
            asignarTextoElemento('h2','Digite el nombre de sus amigos');
        }
    }else{
        //Mensaje para no ingresar un valor vacio
        asignarTextoElemento('h2','Ingrese un valor correcto');
        
    }
    actualizarAmigos();   
}

function actualizarAmigos(){
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = `<li> ${amigos}</li>` ;
}

function sortearAmigo(){
    let amigoSecreto  = amigos[Math.floor(Math.random()*amigos.length)];
    let amigoGenerado = amigos.indexOf(amigoSecreto);
    //
    let elementoHTML = document.getElementById('resultado');
    if (amigos.length != 0){
        elementoHTML.innerHTML = `<li> ${amigoSecreto}</li>` ;
    }else{
        asignarTextoElemento('h2','Ya se sortearon todos los amigos');
        elementoHTML.innerHTML = '';
    }
    //
    amigos.splice(amigoGenerado,1); 
    //
    actualizarAmigos(); 
}

parametroInciales();