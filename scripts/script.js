
//Funcion de boton en la pagina de bibliografia
function toggleSections(){
    var textoOculto = document.getElementById("textoOculto");

    if (textoOculto.style.display == "block") {
        textoOculto.style.display = "none";
        document.getElementById("toggleSections").textContent = "Leer mas";
    } else {
        textoOculto.style.display ="block";
        document.getElementById("toggleSections").textContent = "Leer menos";
    }
}

//Funciones de la galeria 
function showCategoria(type) {
    var familiaElement = document.getElementById("familia");
    var paseosElement = document.getElementById("paseos");
    var hobbiesElement = document.getElementById('hobbies');

    var familiaBtnElement = document.getElementById("familia-btn"); 
    var paseosBtnElement = document.getElementById("paseos-btn");
    var hobbiesBtnElement = document.getElementById("hobbies")
}