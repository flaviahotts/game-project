const bob = document.querySelector(".bob");

const jump = () => {
  bob.classList.add("jump");
  setTimeout(() => {
    bob.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const garyPosition = gary.offsetLeft;
  if (garyPosition <= 120) {
    gary.style.animation = "none";
    gary.style.left = "${garyPosition}px";
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);
