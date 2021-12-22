let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde; 1 - vermelho; 2 - amarelo; 3 - azul.

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//determina a próxima cor que será acesa
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');   
    });
}

//verifica se o jogador está clicando na ordem correta
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nParabéns, você avançou ao próximo nível!`);
        nextLevel();
    }
}

//função clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return blue;
    }else if (color == 1) {
        return red;
    }else if (color == 2) {
        return yellow
    }else{
        return blue;
    }
}

//próximo nível do jogo
let nextLevel = () => {
    score += 1;
    shuffleOrder();
}

//determina o final do jogo
let gameOver = () => {
    alert(`Sua Pontuação é: ${score} pontos.\nFim de Jogo!\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//inicia um novo jogo
let playGame = () => {
    alert("Bem vindo ao Genius!\nIniciando um novo jogo!");
    score = 0;
    nextLevel();
}

//eventos de clique do usuário
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();