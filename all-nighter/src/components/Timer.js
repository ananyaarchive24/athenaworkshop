import React, { useState, useEffect } from 'react';

function Timer(){
  const [secondsRemaining, setSecondsRemaining] = useState(90 * 60);
  const [timerActive, setTimerActive] = useState(false);

  // convert seconds to MM:SS format
  const getTimeDisplay = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const beginTimer = () => {
    setTimerActive(true);
  };

  const stopTimer = () => {
    setTimerActive(false);
  };

  const restartTimer = () => {
    setTimerActive(false);
    setSecondsRemaining(90 * 60);
  };

  // handle the countdown
  useEffect(() => {
    let countdown;
    
    if (timerActive && secondsRemaining > 0) {
      countdown = setInterval(() => {
        setSecondsRemaining(prev => prev - 1);
      }, 1000);
    }
    
    return () => clearInterval(countdown);
  }, [timerActive, secondsRemaining]);

  return(
    <div className="timer-widget">
      <h3>Deep Work Block</h3>
      <div className="timer-display">{getTimeDisplay(secondsRemaining)}</div>
      <div className="timer-controls">
        <button onClick={beginTimer}>Start</button>
        <button onClick={restartTimer}>Reset</button>
        <button onClick={stopTimer}>Pause</button>
      </div>
    </div>
  )
}

export default Timer;