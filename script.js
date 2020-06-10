// Timer count down function
document.addEventListener("DOMContentLoaded", () => {
  const timeLeftDisplay = document.getElementById("#time-left");
  const startBtn = document.getElementById("#startButton");
  let timeLeft = 75;

  function countDown() {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }
  startBtn.addEventListener("click", countDown);
});
