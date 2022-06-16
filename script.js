/*selecionar cada elemento do html para manipular em js*/
const bob = document.querySelector(".bob");
const gary = document.querySelector(".gary");
const jellyfish = document.querySelector(".jellyfish");
const btnRestart = document.querySelector(".btnRestart");
const btnStart = document.querySelector(".btnStart");
const gameBoard = document.querySelector(".game-board");

/*adicionar e remover o jump no bob*/
const jump = () => {
  bob.classList.add("jump");

  setTimeout(() => {
    bob.classList.remove("jump");
  }, 500);

  jumpSound.play();
};

/* collision event (gameover)*/
const collision = setInterval(() => {
  const garyPosition = gary.offsetLeft;
  const bobPosition = +window.getComputedStyle(bob).bottom.replace("px", "");

  if (garyPosition <= 85 && garyPosition > 0 && bobPosition < 55) {
    gary.style.animation = "none";
    gary.style.left = `${garyPosition}px`;

    bob.style.animation = "none";
    bob.style.bottom = `${bobPosition}px`;

    /*mudar imagem do bob quando houver a colisao (nao esta mais funcionando kkkkrying)*/
    bob.src = "./images/bob-dead.gif";
    bob.style.width = "130px";

    gameOver();

    /*parar o loop da colisao)*/
    clearInterval(collision);
  }
}, 10);

/* adicionar o evento de jump ao pressionar qualquer tecla no teclado e/ou clicar no mouse*/
document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

/*adicionar evento de click para reiniciar o jogo*/
btnRestart.addEventListener("click", function () {
  location.reload();
});

/*sound efects*/
const backgroundSound = new Audio();
backgroundSound.src = "./sounds/spongebob-background.ogg";
backgroundSound.collision = true;

const gameOverSound = new Audio();
gameOverSound.src = "./sounds/spongebob-laught.ogg";

const jumpSound = new Audio();
jumpSound.src = "./sounds/jump.ogg";

/*game over */
function gameOver() {
  const modalGameOver = document.getElementById("modalgameover");
  modalGameOver.classList.remove("hidden");
  modalGameOver.classList.add("show");
  backgroundSound.pause();
  gameOverSound.play();
}

/*start*/
btnStart.addEventListener("click", function () {
  const start = document.getElementById("start");
  start.classList.remove("show");
  start.classList.add("hidden");
  gameBoard.classList.remove("hidden");
  gameBoard.classList.add("show");
  backgroundSound.play();
});
