
let cubo = document.getElementsByClassName("cubo")
console.log('cubo: ', cubo);

function rotacionar() {
    // Alterna a rotação entre 0 e 360 graus
    if (cubo[0].style.transform === "rotateX(360deg) rotateY(360deg)") {
        cubo[0].style.transform = "rotateX(0deg) rotateY(10deg)";
    } else {
        cubo[0].style.transform = "rotateX(360deg) rotateY(360deg)";
    }
}


function rotacionar2() {
    // Alterna a rotação entre 0 e 360 graus
    if (cubo[1].style.transform === "rotateX(360deg) rotateY(360deg) skew(50deg)") {
        cubo[1].style.transform = "rotateX(0deg)";
    } else {
        cubo[1].style.transform = "rotateX(360deg) rotateY(360deg) skew(50deg)";
    }
}

function rotacionar3() {
    // Alterna a rotação entre 0 e 360 graus
    if (cubo[2].style.transform === "rotateX(360deg) rotateY(-75deg)") {
        cubo[2].style.transform = "rotateX(0deg)";
    } else {
        cubo[2].style.transform = "rotateX(360deg) rotateY(-75deg)";
    }
}