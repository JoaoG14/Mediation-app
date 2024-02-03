const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const reset = document.getElementById("btn-reset");
let minutes = document.getElementById("minute");

let paused = false;
let holder;
let resetHolderMin;
let resetHolderSec;
let started = false;

function rangeSlide(value) {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `${value}:00`;
  }
}

btnStart.addEventListener("click", () => {
  let duration;

  started = true;

  document.getElementById("minute").disabled = true;

  console.log(minutes.value);

  if (paused) {
    duration = holder;
    paused = false;
  } else {
    document.getElementById("bell").play();
    duration = parseInt(minutes.value) * 60;
  }

  resetHolderMin = Math.floor(duration / 60);
  resetHolderSec = Math.floor(duration % 60);

  resetHolderSec = resetHolderSec < 10 ? "0" + resetHolderSec : resetHolderSec;

  display = document.querySelector(".timer");

  btnStart.classList.remove("show");
  btnStart.classList.add("hide");
  btnPause.classList.remove("hide");
  btnPause.classList.add("show");

  timer(duration, display);
});

const timer = (duration, display) => {
  let timer = duration;
  let minutes, seconds;

  let interval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = Math.floor(timer % 60);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${minutes}:${seconds}`;

    timer -= 1;

    if (timer < 0) {
      document.getElementById("bell").play();
      display.innerHTML = "FIM!";
      btnPause.classList.remove("show");
      btnPause.classList.add("hide");
      btnStart.classList.remove("hide");
      btnStart.classList.add("show");
      clearInterval(interval);
      document.getElementById("minute").disabled = false;
      started = false;
    }

    btnPause.addEventListener(
      "click",
      (resetTime = () => {
        holder = timer;
        clearInterval(interval);
        btnPause.classList.remove("show");
        btnPause.classList.add("hide");
        btnStart.classList.remove("hide");
        btnStart.classList.add("show");
        paused = true;
        console.log(holder);
      })
    );

    reset.addEventListener(
      "click",
      (resetTime = () => {
        clearInterval(interval);
        display.innerHTML = `${resetHolderMin}:${resetHolderSec}`;
        btnPause.classList.remove("show");
        btnPause.classList.add("hide");
        btnStart.classList.remove("hide");
        btnStart.classList.add("show");
        paused = false;
        started = false;
        document.getElementById("minute").disabled = false;
      })
    );
  }, 1000);
};
