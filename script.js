const bob = document.querySelector(".bob");
const gary = document.querySelector(".gary");

const jump = () => {
  bob.classList.add("jump");
  setTimeout(() => {
    bob.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const garyPosition = gary.offsetLeft;
  const bobPosition = +window.getComputedStyle(bob).bottom.replace("px", "");

  if (garyPosition <= 85 && garyPosition > 0 && bobPosition < 55) {
    gary.style.animation = "none";
    gary.style.left = `${garyPosition}px`;

    bob.style.animation = "none";
    bob.style.bottom = `${bobPosition}px`;

    bob.src = "./images/bob-dead.gif";
    bob.style.width = "130px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);
