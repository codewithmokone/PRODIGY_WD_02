// const playButton = document.querySelector('.play');
const resetButton = document.getElementsByClassName('reset')[0];
const startButton = document.getElementsByClassName('start')[0];
const lapButton = document.getElementsByClassName('lap')[0];

let isPlay = false;

const toggleButton = () => {
  resetButton.classList.remove('hidden');
  lapButton.classList.remove('hidden');
};

const start = () => {
    if(!isPlay){
        startButton.innerHTML = 'Stop';
        isPlay = true;
    }else{
        startButton.innerHTML = 'Start';
        isPlay = true;
    }
  toggleButton();
};


const reset = () => {
    play();
    resetButton.classList.add('hidden');
    lapButton.classList.add('hidden');
}

startButton.addEventListener('click', start);
resetButton.addEventListener('click',reset)
