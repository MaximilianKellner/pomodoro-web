let workTime = 25 * 60; // 25 Minuten in Sekunden
let breakTime = 5 * 60; // 5 Minuten in Sekunden
let isRunning = false;
let isWorkPhase = true;
let timeLeft = workTime;
let timerInterval;
const icon = document.getElementById('play-pause');

function toggleTimer() {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
    isRunning = !isRunning;
    changePlayPauseIcon();
}

function changePlayPauseIcon() {
    // Wenn der Timer läuft, zeige das Pause-Icon /ressources/icons/pause.svg
    if (isRunning) {
        icon.src = './ressources/pause.svg';
    } else {
        icon.src = './ressources/play.svg';
    }
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
    isRunning = false;
    changePlayPauseIcon();
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.querySelector('.time').textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
        isWorkPhase = !isWorkPhase;
        timeLeft = isWorkPhase ? workTime : breakTime;
        document.querySelector('.workphase').textContent = isWorkPhase ? 'Arbeit' : 'Pause';
    }
}