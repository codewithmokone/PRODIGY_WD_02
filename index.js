// Select various elements from the DOM interaction
const resetButton = document.querySelector('.reset'); // Reset button element
const startButton = document.querySelector('.start'); // Start button element
const stopButton = document.querySelector('.stop'); // Stop button element
const lapButton = document.querySelector('.lap');  // Lab button element
const clearButton = document.querySelector('.lap-clear-button'); // Clear laps button element
const minute = document.querySelector('.minute'); // Display for minutes
const second = document.querySelector('.second'); // Display for seconds
const milliSecond = document.querySelector('.mSecond'); // Display for milliseconds
const laps = document.querySelector('.laps'); // Container for lap records

// Variables for time intervals and counters
let min; // Interval for minute counter
let sec; // Interval for second counter
let mSec; // Interval for millisecond counter
let minCounter = 0; // Minutes count
let secCounter = 0; // Seconds count
let mSecCounter = 0; // Milliseconds count
let lapItem = 0; // Lap count
let isPlay = false; // Status to check if the stopwatch is running
let isReset = false; // Status to check if the stopwatch has been reset

// Function to toggle visibility of reset button and lap buttons
const toggleButton = () => {
  resetButton.classList.remove('hidden'); // Show reset button
  lapButton.classList.remove('hidden'); // Show lap button
};

// Function to start and stop the stopwatch
const start = () => {

    // Check if stopwatch is not already running and has not been reset
    if(!isPlay && !isReset){
        stopButton.classList.remove('hidden'); // Shows the stop button
        startButton.classList.add('hidden'); // Hides the start button
        // startButton.innerText = 'Stop'; // Change button text to 'Stop'

        // Set interval fro minute counter (every 60 seconds)
        min = setInterval(() => {
            minute.innerText = `${String(++minCounter).padStart(2, '0')}.`; // Update minute display
        }, 60*1000);

        // Set interval for second counter (every 1 second)
        sec = setInterval(() => {
            if(secCounter === 60){
                secCounter = 0; // Reset second counter if it reaches 60
            }
            second.innerText = `${String(++secCounter).padStart(2, '0')}:`; // Update second display
        }, 1000)

        // Set interval for second counter (every 10 milliseconds)
        mSec = setInterval(() => {
            if(mSecCounter === 100){
                mSecCounter = 0; // Reset millisecond counter if it reaches 100
            }
            milliSecond.innerText = `${String(++mSecCounter).padStart(2, '0')}`; // Update millisecond display
        }, 10)
        isPlay = true; // Set status to playing
        isReset = true; // indicate that stopwatch is not reset
    }else{
        // If stopwatch is running, stop / pause it
        stopButton.classList.add('hidden'); // Hides the stop button
        startButton.classList.remove('hidden'); // Shows the start button
        clearInterval(min); // Clear minute interval
        clearInterval(sec); // Clear second interval
        clearInterval(mSec); // Clear millisecond interval
        isPlay = false; // Set status to not playing
        isReset = false; // indicate that stopwatch can be reset
    }
  toggleButton(); // Update button visibility
};


// Function to reset the stopwatch
const reset = () => {
    isReset = true; // Indicate that stopwatch is being reset
    start(); // Stop the stopwatch if it is running
    resetButton.classList.add('hidden'); // Hide reset button
    lapButton.classList.add('hidden'); // Hide lap button

    minCounter = 0;
    secCounter = 0;
    mSecCounter = 0;
    // Reset time displays
    minute.innerText = '00:';
    second.innerText = '00:';
    milliSecond.innerText = '00';
}

// Function to record a lap
const lap = () => {
    const li = document.createElement('li'); // Create new list item for the lap
    const number = document.createElement('span'); // Create span for lap number
    const timeStamp = document.createElement('span'); //Create span for timestamp

    li.setAttribute('class', 'lap-item'); // Add class for li
    number.setAttribute('class', 'number'); // Add class for lap number
    timeStamp.setAttribute('class','time-stamp'); // Add class for timestamp

    number.innerText = `Lap ${++lapItem}`; // Set lap number
    timeStamp.innerText = `${minCounter} : ${secCounter} : ${mSecCounter}`; // Set timestamp text

    // Append lap number and timestamp to list item
    li.append(number, timeStamp);
    laps.append(li); // Add the list item to the laps container

    clearButton.classList.remove('hidden'); // Showw clear button
}

// function to clear all lap records
const clearAll = () => {
    laps.innerHTML = ''; // Clear all lap records
    laps.append(clearButton); // Re-append the clear button
    clearButton.classList.add('hidden'); // hide the clear button
}

// Event listeners for buttons
startButton.addEventListener('click', start); // Start/Stop button click event
stopButton.addEventListener('click', start); // Start/Stop button click event
resetButton.addEventListener('click',reset); // Reset button click event
lapButton.addEventListener('click',lap); // Lap button click event
clearButton.addEventListener('click',clearAll); // Clear laps button click event
