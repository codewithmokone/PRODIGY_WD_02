const resetButton = document.querySelector('.reset');
const startButton = document.querySelector('.start');
const lapButton = document.querySelector('.lap');
const clearButton = document.querySelector('.lap-clear-button');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const milliSecond = document.querySelector('.mSecond');
const laps = document.querySelector('.laps');

let min;
let sec;
let mSec;
let minCounter = 0;
let secCounter = 0;
let mSecCounter = 0;
let lapItem = 0;
let isPlay = false;
let isReset = false;


const toggleButton = () => {
  resetButton.classList.remove('hidden');
  lapButton.classList.remove('hidden');
};


const start = () => {
    if(!isPlay && !isReset){
        startButton.innerText = 'Stop';
        min = setInterval(() => {
            minute.innerText = `${++minCounter}.`;
        }, 60*1000)
        sec = setInterval(() => {
            if(secCounter === 60){
                secCounter = 0;
            }
            second.innerText = `${++secCounter}.`;
        }, 1000)
        mSec = setInterval(() => {
            if(mSecCounter === 100){
                mSecCounter = 0;
            }
            milliSecond.innerText = `${++mSecCounter}`;
        }, 10)
        isPlay = true;
        isReset = true;
    }else{
        startButton.innerText = 'Start';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(mSec);
        isPlay = false;
        isReset = false;
    }
  toggleButton();
};


// Reset the watch
const reset = () => {
    isReset = true;
    start();
    resetButton.classList.add('hidden');
    lapButton.classList.add('hidden');
    minute.innerText = '0 :';
    second.innerText = '0 .';
    milliSecond.innerText = '0';
}

const lap = () => {
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timeStamp = document.createElement('span');

    li.setAttribute('class', 'lap-item');
    number.setAttribute('class', 'number');
    timeStamp.setAttribute('class','time-stamp');

    number.innerText = `${++lapItem}`;
    timeStamp.innerText = `${minCounter} : ${secCounter} : ${mSecCounter}`;

    li.append(number, timeStamp);
    laps.append(li);

    clearButton.classList.remove('hidden');
}

const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add('hidden');
}

startButton.addEventListener('click', start);
resetButton.addEventListener('click',reset);
lapButton.addEventListener('click',lap);
clearButton.addEventListener('click',clearAll);
