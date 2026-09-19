// Variaveis
const tamanho = 5;
const quantidadeMinas = 5;
const jogoDiv = document.getElementById("jogo"); // Pega o elemento no html

let grade = Array(tamanho * tamanho).fill(false); // Cria um array 5x5
let minasColocadas = 0;


function iniciarJogo() {
    const div = document.createElement("div");

    div.id = "grade";

    jogoDiv.appendChild(div);

    gerarGrade();
}

function gerarGrade() {
    const gradeDiv = document.getElementById("grade"); // Pega o elemento no html
    // Sorteia as minas
    while (minasColocadas < quantidadeMinas) {
        let posicao = Math.floor(Math.random() * grade.length); // Sorteia as posições com minas

        // Verifica se a posição já possui uma mina
        if (!grade[posicao]) {
            grade[posicao] = true; // Coloca a mina
            minasColocadas++;
        }
    }

    // Cria os botões da grade
    for (let i = 0; i < grade.length; i++) {
        const botao = document.createElement("button");

        // Deixa os botões melhores de visualizar
        botao.style.width = "40px";
        botao.style.height = "40px";
        botao.style.margin = "2px";

        // Adciona a função para cada botão
        botao.addEventListener("click", function() {
            // Se tem uma mina
            if (grade[i]) {
                botao.textContent = "X";
                alert("Você perdeu!");
            } else { // Se não tem uma mina
                botao.textContent = "0";
            }
        });

        gradeDiv.appendChild(botao); // Adiciona os botões na div
    }
}