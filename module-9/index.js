const startBtn = document.querySelector('.js-timer-start');
const resetBtn = document.querySelector('.js-timer-reset');
const innerResultField = document.querySelector('.js-clockface');
const lapBtn = document.querySelector('.js-take-lap');
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

        resetBtn.setAttribute("disabled", "");
        this.isStop = true;
        this.deltaTime = currentTime - this.startTime;
        this.onTick({ minute, seconds, milliseconds });
        startBtn.textContent = 'PAUSE';
      }, 100);
    } else {
      this.pauseTimer();
      resetBtn.removeAttribute("disabled");
    }
  }

  resultSaving() {
    const li = document.createElement('li');

    li.classList.add('js-list');
    if ((innerResultField.textContent !== "0:00:0") && (!this.savedResult.includes(innerResultField.textContent)))  {
      list.appendChild(li).textContent = innerResultField.textContent;
      this.savedResult.push(innerResultField.textContent);
    } else return;

    console.log(this.savedResult);
  }

  pauseTimer() {
    clearInterval(this.asyncId);
    this.isStop = false;
    startBtn.textContent = 'CONTINUE';
  }
  resetTimer() {
    clearInterval(this.asyncId);
    this.isStop = false;
    this.deltaTime = 0;
    this.onTick({ minute: 0, seconds: 0, milliseconds: 0 });
    startBtn.textContent = 'START';
  }
}

const newTimer = new Timer(null, 0, timerRender);

function timerRender({ minute, seconds, milliseconds }) {
  seconds < 10
    ? (innerResultField.textContent = `${minute}:0${seconds}:${milliseconds}`)
    : (innerResultField.textContent = `${minute}:${seconds}:${milliseconds}`);
}

startBtn.addEventListener('click', newTimer.startTimer.bind(newTimer));
resetBtn.addEventListener('click', newTimer.resetTimer.bind(newTimer));
lapBtn.addEventListener('click', newTimer.resultSaving.bind(newTimer));


