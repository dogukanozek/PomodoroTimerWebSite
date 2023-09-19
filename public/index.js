const StartButton = document.querySelector(".timer-start"); //Start Button
const Timer = document.querySelector(".timer p"); //Timer
const top_buttons1 = document.querySelector(".btn-top-1"); //pomodoro button
const top_buttons2 = document.querySelector(".btn-top-2"); //short break
const top_buttons3 = document.querySelector(".btn-top-3"); //long break
let time = 1500; //25 minutes by seconds
let oldtime=0;
const pomodorodes = document.querySelector(".pomodoro-description");
const countpomo = document.querySelector(".dotime p");

let countpomodoro = 1;
let isPomodoroRunning = false;
let isshortbreak = false;
let islongbreak = false;
let countdown;
//Start Button Click Event start timer
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
  Timer.textContent = display;
  document.title = display;
}
function resetTimer() {
  clearInterval(countdown);
  isPomodoroRunning = false;
  StartButton.textContent = "Start";
  oldtime=1500;
  time = 1500;
  displayTimeLeft(time);
  document.title = "Pomodoro Timer";
}

StartButton.addEventListener("click", () => {
  console.log(top_buttons1);
  if (!isPomodoroRunning) {
    isPomodoroRunning = true;
    StartButton.textContent = "Pause";
    countdown = setInterval(() => {
      time--;
      if (time < 0) {
        clearInterval(countdown);
        isPomodoroRunning = false;
        if(oldtime==1500){
          countpomodoro++;
        }
       }
      displayTimeLeft(time);
    }, 1000);
  } else {
    clearInterval(countdown);
    isPomodoroRunning = false;
    StartButton.textContent = "Start";
  }
  if (isshortbreak) {
    isshortbreak = false;
    StartButton.textContent = "Pause";
  }
});
top_buttons1.addEventListener("click", () => {
  countpomo.textContent = "#" + countpomodoro;
  pomodorodes.innerHTML = "<p>Time to Focus!</p>";
  resetTimer();
  isshortbreak = false;
  islongbreak = false;
  document.body.classList.remove("bodychange2");
  document.body.classList.remove("bodychange");
});
top_buttons2.addEventListener("click", () => {
  StartButton.textContent = "Start";
  clearInterval(countdown);
  isPomodoroRunning = false;
  pomodorodes.innerHTML = "<p>Break Time!</p>";
  time = 300;
  oldtime=300;
  displayTimeLeft(time);
  isshortbreak = true;

  if (islongbreak == true) {
    document.body.classList.remove("bodychange2");
    islongbreak = false;
  }
  document.body.classList.add("bodychange");
});
top_buttons3.addEventListener("click", () => {
  clearInterval(countdown);
  isPomodoroRunning = false;
  StartButton.textContent = "Start";
  pomodorodes.innerHTML = "<p>Break Time!</p>";
  time = 900;
  oldtime=900;
  displayTimeLeft(time);
  islongbreak = true;

  if (isshortbreak == true) {
    document.body.classList.remove("bodychange");
    isshortbreak = false;
  }
  document.body.classList.add("bodychange2");
});
