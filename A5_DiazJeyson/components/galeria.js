// Exercici 1: Carrega la miniatura clicada al visor gran
function mostrarImatgeGran(elementImatge) {
    const visor = document.getElementById("imatgeGran");
    const titol = document.getElementById("titolImatge");

    visor.src = elementImatge.src;
    visor.alt = elementImatge.alt;
    titol.textContent = elementImatge.alt;
}
