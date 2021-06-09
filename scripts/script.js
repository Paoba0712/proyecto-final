function toggleSections(){
    var textoOculto = document.getElementById("textoOculto");
    if (!textoOculto.style.display || textoOculto.style.display === 'block') {
        textoOculto.style.display = 'none';
        document.getElementById("toggleBloque").textContent = 'Leer mas';
    } else {
        textoOculto.style.display = 'block';
        document.getElementById("toggleBloque").textContent = 'Leer menos';
    }
}