const circles = document.querySelectorAll(".circle");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.getElementById("next");

const progress = document.querySelector(".progress");

let current = 0;
let currWidth = 32;

nextBtn.addEventListener("click", () => {
  if (current < circles.length - 1) {
    current++;
    progress.style.width = currWidth * current + "%";
    circles[current].classList.add("active");
  }

  if (current === circles.length - 1) {
    nextBtn.disabled = true;
  }

  if (current > 0) {
    prevBtn.disabled = false;
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    circles[current].classList.remove("active");
    current--;
    progress.style.width = currWidth * current + "%";
  }

  if (current === 0) {
    prevBtn.disabled = true;
  }

  if (current < circles.length - 1) {
    nextBtn.disabled = false;
  }
});
