
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