/*Mini game desenvolvido para Atividade de extensão.

-Tecnologia Aplicada à Inclusão Digital.
Com tema se baseando em educação de qualidade, dentro
dos Objetivos de Desenvolvimento Sustentável da ONU.
*/

//sons do game
const flipSound = new Audio("sounds/flip.mp3"); //som ao virar carta
const matchSound = new Audio("sounds/match.mp3"); //som de cartas combinadas
const wrongSound = new Audio("sounds/wrong.mp3"); //som de cartas diferentes
const gameOverSound = new Audio("sounds/gameover.mp3"); //som ao finalizar o game

//elementos da interface
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const gameBoard = document.getElementById('game-board');
const gameOverMessage = document.getElementById('game-over-message');
const restartButton = document.getElementById('restart-button');

const cards = [
  { name: "mouse", src: "images/mouse-image.png" },
  { name: "mouse", src: "images/mouse-text.png" },
  { name: "teclado", src: "images/teclado-image.png" },
  { name: "teclado", src: "images/teclado-text.png" },
  { name: "cartao", src: "images/cartao-image.png" },
  { name: "cartao", src: "images/cartao-text.png" },
  { name: "hd", src: "images/hd-image.png" },
  { name: "hd", src: "images/hd-text.png" },
  { name: "monitor", src: "images/monitor-image.png" },
  { name: "monitor", src: "images/monitor-text.png" },
  { name: "pendrive", src: "images/pendrive-image.png" },
  { name: "pendrive", src: "images/pendrive-text.png" },
  { name: "placamae", src: "images/placamae-image.png" },
  { name: "placamae", src: "images/placamae-text.png" },
  { name: "ram", src: "images/ram-image.png" },
  { name: "ram", src: "images/ram-text.png" },
  { name: "ssd", src: "images/ssd-image.png" },
  { name: "ssd", src: "images/ssd-text.png" },
];

//controle do jogo
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createCards() {
  const shuffledCards = shuffle(cards); //embaralha cartas
  gameBoard.innerHTML = ""; 

  shuffledCards.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("memory-card");
    cardElement.setAttribute("data-name", card.name);  // Guarda o nome para comparar

    // define as faces da carta (frente e verso)
    cardElement.innerHTML = `
      <img class="front-face" src="${card.src}" alt="${card.name}">
      <img class="back-face" src="images/verso.png" alt="Verso">
    `;

    gameBoard.appendChild(cardElement);
  });
}
//mostra todas as cartas viradas para memorizar 
function showAllCards() {
  document.querySelectorAll(".memory-card").forEach(card => {
    card.classList.add("flip");
  });
}

//esconde as cartas
function hideAllCards() {
  document.querySelectorAll(".memory-card").forEach(card => {
    card.classList.remove("flip");
  });
}
//habilita o clique nas cartas
function enableCardClicks() {
  document.querySelectorAll(".memory-card").forEach(card => {
    card.addEventListener("click", flipCard);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    flipSound.play();
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}
//verifica se as duas cartas são iguais 
function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;

  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}
//remove clique de cartas ja combinadas 
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchSound.play();
  resetBoard();
  checkGameOver();
}
//vira para baixo cartas não combinadas
function unflipCards() {
  wrongSound.play();
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 800);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
//verifica se todas as cartas foram combinadas 
function checkGameOver() {
  const flippedCards = document.querySelectorAll('.memory-card.flip');
  if (flippedCards.length === cards.length) {
    gameOverSound.play();
    gameOverMessage.classList.remove('hidden');
  }
}
//reinicia o jogo
function restartGame() {
  gameOverMessage.classList.add('hidden');
  createCards();
  showAllCards();

  setTimeout(() => {
    hideAllCards();
    enableCardClicks();
  }, 3000);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  gameOverMessage.classList.add("hidden");
  document.getElementById("restart-container").classList.remove("hidden");
  createCards();

  showAllCards();

  setTimeout(() => {
    hideAllCards();
    enableCardClicks();
  }, 3000);
});

//botão de reínicio 
restartButton.addEventListener('click', restartGame);
""