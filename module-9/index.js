const startBtn = document.querySelector('.js-timer-start');
const resetBtn = document.querySelector('.js-timer-reset');
const renderField = document.querySelector('.js-clockface');
const lap = document.querySelector('.js-take-lap');
const list = document.querySelector('.js-list');

class Timer {
  constructor(asyncId = null, deltaTime = 0, onTick, savedResult = [], isStop = false) {
    this.asyncId = asyncId;
    this.deltaTime = deltaTime;
    this.onTick = onTick;
    this.savedResult = savedResult;
    this.isStop = isStop;
  }

  startTimer() {
    if (!this.isStop) {
      this.startTime = Date.now() - this.deltaTime;

      this.asyncId = setInterval(() => {
        const date = new Date(this.deltaTime);
        const currentTime = Date.now();
        const milliseconds = Number.parseInt(date.getMilliseconds() / 100);
        const seconds = date.getSeconds();
        const minute = date.getMinutes();

        this.isStop = true;
        this.deltaTime = currentTime - this.startTime;
        this.onTick({ minute, seconds, milliseconds });
        startBtn.textContent = 'PAUSE';
      }, 100);
    } else this.pauseTimer();
  }

  saveList() {
    const li = document.createElement('li');

    li.classList.add('js-list');
    if (this.isStop) {
      list.appendChild(li).textContent = renderField.textContent;
      this.savedResult.push(renderField.textContent);
    } else return;

    console.log(this.savedResult);
  }

  pauseTimer() {
    clearInterval(this.asyncId);
    this.isStop = false;
    startBtn.textContent = 'CONTINUE';
  }
  stopTimer() {
    clearInterval(this.asyncId);
    this.isStop = false;
    this.deltaTime = 0;
    this.onTick({ minute: 0, seconds: 0, milliseconds: 0 });
    startBtn.textContent = 'START';
  }
}

const newTimer = new Timer(null, 0, render);

function render({ minute, seconds, milliseconds }) {
  seconds < 10
    ? (renderField.textContent = `${minute}:0${seconds}:${milliseconds}`)
    : (renderField.textContent = `${minute}:${seconds}:${milliseconds}`);
}

startBtn.addEventListener('click', newTimer.startTimer.bind(newTimer));
resetBtn.addEventListener('click', newTimer.stopTimer.bind(newTimer));
lap.addEventListener('click', newTimer.saveList.bind(newTimer));


