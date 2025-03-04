// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Limpia el input amigo
function limpiar(){
    document.getElementById('amigo').value = '';
}

//Asigna texto al elemento enviado por parametro
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Asigna texto inicial al elemento h2
function parametroInciales(){
    asignarTextoElemento('h2','Digite el nombre de sus amigos');
}

//Inserta la persona en el array
function insertarPersona(nuevaPersona){
    //Insertar nueva persona
    amigos.push(nuevaPersona);
}

//Realiza la validación de los datos ingresados para luego ser registrado o descartado.
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

//actualiza la lista cada vez que se inserta un nuevo amigo o se sortea.
function actualizarAmigos(){
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = `<li> ${amigos}</li>` ;
}

//Realiza el sorteo del amigo secreto y al mismo tiempo elimina del array el amigo que ya fue sorteado.
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