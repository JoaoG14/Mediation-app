const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const reset = document.getElementById("btn-reset");
let minutes = document.getElementById("minute");
const btnSoundOn = document.getElementById("btn-sound-on");
const btnSoundOff = document.getElementById("btn-sound-off");
const bell = document.getElementById("bell");
const ambientSound = document.getElementById("ambient-sound");
const oneMinute = document.getElementById("one-minute");
const fiveMinutes = document.getElementById("five-minutes");
const tenMinutes = document.getElementById("ten-minutes");
const thirtyMinutes = document.getElementById("thirty-minutes");
const oneHour = document.getElementById("one-hour");
const customTimer = document.getElementById("custom-timer");
const inputCustomTimer = document.getElementById("custom-timer-input");

let paused = false;
let holder;
let resetHolderMin;
let resetHolderSec;
let started = false;
let duration;

function cleanTimeBtns() {
  oneMinute.style.color = "var(--second-color)";
  oneMinute.style.background = "var(--main-color)";
  fiveMinutes.style.color = "var(--second-color)";
  fiveMinutes.style.background = "var(--main-color)";
  tenMinutes.style.color = "var(--second-color)";
  tenMinutes.style.background = "var(--main-color)";
  thirtyMinutes.style.color = "var(--second-color)";
  thirtyMinutes.style.background = "var(--main-color)";
  oneHour.style.color = "var(--second-color)";
  oneHour.style.background = "var(--main-color)";
}

oneMinute.addEventListener("click", () => {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `1:00`;
    minutes.value = 1;
    cleanTimeBtns();
    oneMinute.style.color = "var(--main-color)";
    oneMinute.style.background = "var(--second-color)";
  }
});

fiveMinutes.addEventListener("click", () => {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `5:00`;
    minutes.value = 5;
    cleanTimeBtns();
    fiveMinutes.style.color = "var(--main-color)";
    fiveMinutes.style.background = "var(--second-color)";
  }
});

tenMinutes.addEventListener("click", () => {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `10:00`;
    minutes.value = 10;
    cleanTimeBtns();
    tenMinutes.style.color = "var(--main-color)";
    tenMinutes.style.background = "var(--second-color)";
  }
});

thirtyMinutes.addEventListener("click", () => {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `30:00`;
    minutes.value = 30;
    cleanTimeBtns();
    thirtyMinutes.style.color = "var(--main-color)";
    thirtyMinutes.style.background = "var(--second-color)";
  }
});

oneHour.addEventListener("click", () => {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `60:00`;
    minutes.value = 60;
    cleanTimeBtns();
    oneHour.style.color = "var(--main-color)";
    oneHour.style.background = "var(--second-color)";
  }
});

customTimer.addEventListener("click", () => {
  if (started) {
  } else {
    oneMinute.style.display = "none";
    fiveMinutes.style.display = "none";
    tenMinutes.style.display = "none";
    thirtyMinutes.style.display = "none";
    oneHour.style.display = "none";
    inputCustomTimer.style.display = "inline";
  }
});

btnSoundOn.addEventListener("click", () => {
  ambientSound.muted = true;
  btnSoundOn.classList.remove("show");
  btnSoundOn.classList.add("hide");
  btnSoundOff.classList.remove("hide");
  btnSoundOff.classList.add("show");
});

btnSoundOff.addEventListener("click", () => {
  ambientSound.muted = false;
  btnSoundOn.classList.remove("hide");
  btnSoundOn.classList.add("show");
  btnSoundOff.classList.remove("show");
  btnSoundOff.classList.add("hide");
});

function rangeSlide(value) {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `${value}:00`;
  }
}

btnStart.addEventListener("click", () => {
  started = true;

  document.getElementById("minute").disabled = true;

  if (paused) {
    duration = holder;
    document.getElementById("ambient-sound").play();
    paused = false;
  } else {
    bell.currentTime = 0;
    bell.play();
    document.getElementById("ambient-sound").play();
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
      document.getElementById("ambient-sound").pause();
      bell.play();
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
        document.getElementById("ambient-sound").pause();
        bell.pause();
        bell.currentTime = 0;
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
        document.getElementById("ambient-sound").pause();
        bell.pause();
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

function rangeSlide(value) {
  if (started) {
  } else {
    document.getElementById("timer").innerHTML = `${value}:00`;
  }
}
