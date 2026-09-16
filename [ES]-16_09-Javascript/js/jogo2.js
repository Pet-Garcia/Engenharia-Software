let pontos = 0;
let vidas = 3;

function ganharPonto(){
    if(vidas === 0){
        return;
    }

    pontos++;
    document.getElementById("pontos").textContent = pontos;
}

function perderVida(){
    if(vidas > 0){
        vidas--;
        document.getElementById("vidas").textContent = vidas;
                
        if(vidas === 0){
        document.getElementById("gameOver").textContent = "Game Over";
        document.getElementById("btnPonto").disable = true;
        }
    }
}