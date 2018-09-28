// const startBtn = document.querySelector('.js-timer-start');
// const resetBtn = document.querySelector('.js-timer-reset');
// const renderField = document.querySelector('.js-clockface');
// const lap = document.querySelector('.js-take-lap');
// const list = document.querySelector('.js-list');



// const a = new Render (document.querySelector('.asd'));
// a.render();
// console.log(a)

class Timer {
  constructor(parentNode, asyncId = null, deltaTime = 0, savedResult = [], isStop = false) {

    this.parentNode = parentNode;
    this.asyncId = asyncId;
    this.deltaTime = deltaTime;
    this.savedResult = savedResult;
    this.isStop = isStop;
  }

  timerRendering() {
    const sectionTimer = document.createElement('section');
    const clockface = document.createElement('p');
    const startBtn = document.createElement('button');
    const resetBtn = document.createElement('button');
    const lapBtn = document.createElement('button');
    const list = document.createElement('ul');
    const listHead = document.createElement('li');

    listHead.classList.add('head');
    sectionTimer.classList.add('timer');
    clockface.classList.add('clockface', 'js-clockface');
    startBtn.classList.add('timer-btn', 'js-timer-start');
    resetBtn.classList.add('timer-btn', 'js-timer-reset');
    lapBtn.classList.add('timer-btn', 'js-take-lap');
    list.classList.add('laps', 'js-list');

    clockface.textContent = '0:00:0';
    startBtn.textContent = 'START';
    resetBtn.textContent = 'RESET';
    lapBtn.textContent = 'LAP';
    listHead.textContent = "RESULT:"

    list.appendChild(listHead);
    this.parentNode.append(sectionTimer, list);
    sectionTimer.append(clockface, startBtn, resetBtn, lapBtn);

    const innerTextRender = ({ minute, seconds, milliseconds }) => {
      seconds < 10
        ? (clockface.textContent = `${minute}:0${seconds}:${milliseconds}`)
        : (clockface.textContent = `${minute}:${seconds}:${milliseconds}`);
    }

    const startTimer = () => {
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
          innerTextRender({ minute, seconds, milliseconds });
          startBtn.textContent = 'PAUSE';
        }, 100);
      } else {
        pauseTimer();

        resetBtn.removeAttribute("disabled");
      }

    }
    const saveList = () => {
      const li = document.createElement('li');

      li.classList.add('js-list');
      if (((clockface.textContent !== "0:00:0") && (!this.savedResult.includes(clockface.textContent)))) {
        list.appendChild(li).textContent = clockface.textContent;
        this.savedResult.push(clockface.textContent);
      } else return;

      console.log(this.savedResult);
    }

    const pauseTimer = () => {
      clearInterval(this.asyncId);
      this.isStop = false;
      startBtn.textContent = 'CONTINUE';
    }
    const resetTimer = () => {
      clearInterval(this.asyncId);
      this.isStop = false;
      this.deltaTime = 0;
      innerTextRender({ minute: 0, seconds: 0, milliseconds: 0 });
      startBtn.textContent = 'START';
    }

    startBtn.addEventListener('click', startTimer);
    lapBtn.addEventListener('click', saveList);
    resetBtn.addEventListener('click', resetTimer);
  }

}



const newTimer = new Timer(document.querySelector('.block1'));
const newTimer2 = new Timer(document.querySelector('.block2'));
newTimer.timerRendering();
newTimer2.timerRendering();



