// const { request } = require("express");
const timerLogic = require("../public/script/timerLogic");

const startTimer = async (request, response, next) => {
    try {
        console.log(timerLogic);
        await timerLogic;
        console.log("Refactored timerLogic cleanup detected")
        response.status(200).json({
            success: {message: "Timer has been started!"},
            statusCode: 200,
        })
    } catch (error) {
        next(error);
    }
};

const stopTimer = async (request, response, next) => {
    try {
        console.log(timerLogic);
        await timerLogic;
        console.log("Refactored timerLogic cleanup detected for pause timer")
        response.status(200).json({
            success: {message: "Timer has been paused!"},
            statusCode: 200,
        })
    } catch (error) {
        next(error);
    }
};

const resetTimer = async (request, response, next) => {
    try {
        console.log(timerLogic);
        await timerLogic;
        console.log("Refactored timerLogic cleanup detected for reset timer")
        response.status(200).json({
            success: {message: "Timer has been restarted!"},
            statusCode: 200,
        })
    } catch (error) {
        next(error);
    }
};

const tick = () => {
    if (state.currentTime > 0) {
        state.currentTime--;
    } else {
        clearInterval(interval);
        state.isRunning = false;
        state.isWorkSession = !state.isWorkSession;
        state.currentTime = state.isWorkSession ? 25 * 60 : 5 * 60;
    }
};

// const getState = () => state;

module.exports = {startTimer, stopTimer, resetTimer};
