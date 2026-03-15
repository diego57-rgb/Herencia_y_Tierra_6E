const tresBarras = document.getElementById("tres-barras");
const barra = document.getElementById("barra");
let barrasClicked = false;
let debug = false;

tresBarras.addEventListener("click", () => {
    if(!barrasClicked && !debug){
        debug = true;
        tresBarras.style.backgroundColor = "rgba(64, 88, 44, 0.2)";
        tresBarras.style.animation = "moveRight 2s forwards";
        barra.style.animation = "moveRightB 2s forwards";
        setTimeout(() => {
            tresBarras.style.backgroundColor = "rgba(0, 0, 0, 0)";
            barrasClicked = true;
            debug = false;
        }, 1000)
    }
    if(barrasClicked && !debug){
        debug = true;
        tresBarras.style.backgroundColor = "rgba(64, 88, 44, 0.2)";
        tresBarras.style.animation = "moveLeft 2s forwards";
        barra.style.animation = "moveLeftB 2s forwards";
        setTimeout(() => {
            tresBarras.style.backgroundColor = "rgba(0, 0, 0, 0)";
            barrasClicked = false;
            debug = false;
        }, 1000)
    }
})
