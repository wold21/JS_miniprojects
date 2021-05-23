window.onload = function () {
  var mins = 00;
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMins = document.getElementById("min");
  var btnStart = document.getElementById("btn-start");
  var btnStop = document.getElementById("btn-stop");
  var btnReset = document.getElementById("btn-reset");
  var interval;

  btnStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  btnStop.onclick = function () {
    clearInterval(interval);
  };

  btnReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    mins = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMins.innerHTML = mins;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log(seconds);
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 60) {
      console.log(mins);
      mins++;
      appendMins.innerHTML = "0" + mins;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
    if (mins > 60) {
      appendMins.innerHTML = mins;
    }
  }
};
