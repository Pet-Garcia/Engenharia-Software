// limita como teto o 10 e o minimo como 1, multiplicando o random por 10(por que é de 0 a 1)
let numero = Math.floor(Math.random() * 10) + 1;

function jogar () {
    document.getElementById("palpite").value;
    let palpite = document.getElementById("palpite").value;
    if(palpite == numero) {
        document.getElementById("resultado").textContent = "Você acertou!";
    }
    else{
        document.getElementById("resultado").textContent = "Você errou. Tente novamente";
    }
}