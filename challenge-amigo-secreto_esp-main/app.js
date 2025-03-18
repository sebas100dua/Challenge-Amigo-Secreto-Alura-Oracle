const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const miListaAmigos = document.getElementById("listaAmigos");
const miResultado = document.getElementById("resultado");
function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);
    if (!inputAmigo.value){
        alert("Por Favor Ingresar un Nombre")
    }else{
        alert("Guardado")
    }
    listaAmigos.push(inputAmigo.value);
    miListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    miResultado.innerHTML = `<li>El Amigo Secreto es: ${amigoSecreto}</li>`;
     
};