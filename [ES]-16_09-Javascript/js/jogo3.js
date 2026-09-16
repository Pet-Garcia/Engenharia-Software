function vermelho() {
    document.getElementById("caixa").style.backgroundColor = "red";
}

function amarelo() {
    document.getElementById("caixa").style.backgroundColor = "yellow";
}

function verde() {
    document.getElementById("caixa").style.backgroundColor = "green";
}

function mudar() {
    let corEscolhida = document.getElementById("cor").value;

    document.getElementById("caixa").style.width = "300px";
    document.getElementById("caixa").style.height = "300px";
}