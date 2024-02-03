const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const reset = document.getElementById("btn-reset");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
let paused = false;
let holder;

btnStart.addEventListener("click", () => {
  let duration;

  console.log(paused);

  if (paused) {
    duration = holder;
    paused = false;
  } else {
    document.getElementById("bell").play();
    duration = parseInt(minutes.value) * 60 + parseInt(seconds.value);
  }

  display = document.getElementById("timer");

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

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${minutes}:${seconds}`;

    timer -= 1;

    if (timer < 0) {
      display.innerHTML = "FIM!";
      clearInterval(interval);
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
        display.innerHTML = "00:00";
        btnPause.classList.remove("show");
        btnPause.classList.add("hide");
        btnStart.classList.remove("hide");
        btnStart.classList.add("show");
        paused = false;
      })
    );
  }, 1000);
};
