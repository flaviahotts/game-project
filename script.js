const bob = document.querySelector(".bob");
const gary = document.querySelector(".gary");
const jellyfish = document.querySelector(".jellyfish");

const jump = () => {
  bob.classList.add("jump");
  setTimeout(() => {
    bob.classList.remove("jump");
  }, 500);
};

/* collision event*/
const collision = setInterval(() => {
  const garyPosition = gary.offsetLeft;
  const bobPosition = +window.getComputedStyle(bob).bottom.replace("px", "");

  if (garyPosition <= 85 && garyPosition > 0 && bobPosition < 55) {
    gary.style.animation = "none";
    gary.style.left = `${garyPosition}px`;

    bob.style.animation = "none";
    bob.style.bottom = `${bobPosition}px`;

    /*nao esta mais funcionando kkkkrying*/
    bob.src = "./images/bob-dead.gif";
    bob.style.width = "130px";

    /*tocar som de gameover e colocar tela de gameover aqui*/
    gameOver();

    clearInterval(collision);
  }
}, 10);

/* keyboard jump keys */
document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

/*sound efects*/
const backgroundSound = new Audio("./sounds/spongebob-background.ogg");
const gameOverSound = new Audio("./sounds/spongebob-laught.ogg");
backgroundSound.play();

/*game over */
function gameOver() {
  const modalGameOver = document.getElementById("modalgameover");
  modalGameOver.classList.remove("hidden");
  modalGameOver.classList.add("show");

  gameOverSound.play();
}
/*criar addEventListener para o btnRestart colocar reload no background sound*/
