function initializeTimer() {
    //const timerDisplay = document.querySelector('.timer');
    console.log("timerDisplay loading...")
    //const startPauseButton = document.getElementById('start-pause-button');
    console.log("startPauseButton loading...");
    //const resetButton = document.getElementById('reset-button');
    console.log("resetButton loading...");

    // let settings = JSON.parse(localStorage.getItem('timerSettings')) || {
    //     minutes: 25,
    //     breakTime: 5,
    //     alertSound: 'soft-alarm'
    // };
    console.log("settings loading...")

    // let workTime = settings.minutes * 60;
    // let breakTime = settings.breakTime * 60;
    // let currentTime = workTime;
    // let isRunning = false;
    // let interval;
    // let isWorkSession = true;

    console.log("Logging advanced timer settings loading...")

    // Function to format time from seconds to MM:SS
    // const formatTime = (seconds) => {
    //     const minutes = Math.floor(seconds / 60);
    //     const secs = seconds % 60;
    //     return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    // };
    console.log("Function to format time from seconds to MM:SS")

    // Function to update timer display
    // const updateTimerDisplay = () => {
    //     timerDisplay.textContent = formatTime(currentTime);
    // };
    console.log("Function to update timer display")

    // Function to start timer
    console.log("Function to start timer")
    /*
     const startTimer = () => {
        interval = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                updateTimerDisplay();
            } else {
                clearInterval(interval);
                new Audio(`./public/sounds/${settings.alertSound}.mp3`).play();
                isRunning = false;
                isWorkSession = !isWorkSession;
                currentTime = isWorkSession ? workTime : breakTime;
                startPauseButton.innerHTML = '<i class="fa-solid fa-play"></i> start';
                updateTimerDisplay();
            }
        }, 1000);
    };
    */
   

    // Event listener for start/pause button
    console.log("Event listener for start/pause button");
    /*
      startPauseButton.addEventListener('click', () => {
        if (isRunning) {
            clearInterval(interval);
            startPauseButton.innerHTML = '<i class="fa-solid fa-play"></i> start';
        } else {
            startTimer();
            startPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i> pause';
        }
        isRunning = !isRunning;
    });

    */
  
    // Event listener for reset button
    console.log("Event listener for reset button")
    /*
    resetButton.addEventListener('click', () => {
        clearInterval(interval);
        isRunning = false;
        isWorkSession = true;
        currentTime = workTime;
        updateTimerDisplay();
        startPauseButton.innerHTML = '<i class="fa-solid fa-play"></i> start';
    });
    */
    

    //updateTimerDisplay();
    console.log("updateTimerDisplay()")
    //I moved the OG code into the function, defined the variable, and added a string to the console.log to track it
    //const register = document.addEventListener('DOMContentLoaded', initializeTimer);
    console.log("Register triggered")
}

// call the function
//Kit: you can't call the function because it will cause the server to crash because it can't activate the controller

module.exports = initializeTimer();