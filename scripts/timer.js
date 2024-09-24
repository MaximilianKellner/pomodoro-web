let workTime = 25 * 60; // 25 Minuten in Sekunden
let breakTime = 5 * 60; // 5 Minuten in Sekunden
let isWorkPhase = true;
let timeLeft = workTime;
let timerInterval;
let isRunning = false;

function toggleTimer() {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
    isRunning = !isRunning;
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    isWorkPhase = true;
    timeLeft = workTime;
    document.querySelector('.time').textContent = '25:00';
    document.querySelector('.workphase').textContent = 'Arbeit';
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.querySelector('.time').textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    console.log(timeLeft);

    if (timeLeft < 0) {
        isWorkPhase = !isWorkPhase;
        timeLeft = isWorkPhase ? workTime : breakTime;
        document.querySelector('.workphase').textContent = isWorkPhase ? 'Arbeit' : 'Pause';
    }
}

// Beispielaufrufe
//startTimer();
// pauseTimer();
// resetTimer();