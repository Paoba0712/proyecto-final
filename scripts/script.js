
//Funcion de boton en la pagina de bibliografia

function toggleSections() {
    var textoOculto = document.getElementById("textoOculto");

    if (textoOculto.style.display == "block") {
        textoOculto.style.display = "none";
        document.getElementById("toggleSections").textContent = "Leer mas";
    } else {
        textoOculto.style.display = "block";
        document.getElementById("toggleSections").textContent = "Leer menos";
    }
}


//Funciones de la galeria 
function showCategory(type) {
    var familiaElement = document.getElementById("familia");
    var paseosElement = document.getElementById("paseos");
    var hobbiesElement = document.getElementById('hobbies');

    var familiaBtnElement = document.getElementById("familia-btn");
    var paseosBtnElement = document.getElementById("paseos-btn");
    var hobbiesBtnElement = document.getElementById("hobbies-btn");

    switch (type) {
        case "familia":
            paseosElement.style.display = "none";
            hobbiesElement.style.display = "none";
            familiaElement.style.display = "block";

            paseosBtnElement.style.backgroundColor = "#d18e07";
            hobbiesBtnElement.style.backgroundColor = "#d18e07";
            familiaBtnElement.style.backgroundColor = "#F5D0A9";
            break;
        case "paseos":
            hobbiesElement.style.display = "none";
            familiaElement.style.display = "none";
            paseosElement.style.display = "block";

            familiaBtnElement.style.backgroundColor = "#d18e07";
            hobbiesBtnElement.style.backgroundColor = "#d18e07";
            paseosBtnElement.style.backgroundColor = "#F5D0A9";
            break;
        default:
            familiaElement.style.display = "none";
            paseosElement.style.display = "none";
            hobbiesElement.style.display = "block";

            paseosBtnElement.style.backgroundColor = "#d18e07";
            familiaBtnElement.style.backgroundColor = "#d18e07";
            hobbiesBtnElement.style.backgroundColor = "#F5D0A9";
            break;

    }
}