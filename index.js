// const playButton = document.querySelector('.play');
const resetButton = document.querySelector('.reset');
const startButton = document.querySelector('.start');
const lapButton = document.querySelector('.lap');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const milliSecond = document.querySelector('.mSecond');

let min;
let sec;
let mSec;
let minCounter = 0;
let secCounter = 0;
let mSecCounter = 0;
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
            // if(minCounter === 60){
            //     minCounter = 0;
            // }
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


const startSec = () => {
    setInterval(() => {
        second.innerText = sec++;
    }, 1000)
}


// Reset the watch
const reset = () => {
    isReset = true;
    start();
    resetButton.classList.add('hidden');
    lapButton.classList.add('hidden');
    minute.innerText = '0 :'
    second.innerText = '0 .'
    milliSecond.innerText = '0'
}

startButton.addEventListener('click', start);
resetButton.addEventListener('click',reset)
