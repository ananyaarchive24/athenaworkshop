import React, { useState, useEffect } from 'react';


function Timer(){
    const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);

        // to display it in minutes and seconds, not just seconds
        const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
        };

        // start
        const startTimer = () => {
        setIsRunning(true);
        };

        // pause  
        const pauseTimer = () => {
        setIsRunning(false);
        };

        // reset
        const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(90 * 60);
        };

        // the timer to actually work - countdown
        useEffect(() => {
            let interval;
            
            if (isRunning && timeLeft > 0) {
                interval = setInterval(() => {
                setTimeLeft(time => time - 1);
                }, 1000);
            }
            
            return () => clearInterval(interval);
        }, [isRunning, timeLeft]);

    return(
        <div className="timer-widget">
            <h3>Deep Work Block</h3>
            <div className = "timer-display"> {formatTime(timeLeft)}</div>
            <div className="timer-controls">
                <button onClick={startTimer}>Start</button>
                <button onClick={resetTimer}>Reset</button>
                <button onClick={pauseTimer}>Pause</button>
            </div>
        </div>
    )
}

export default Timer;