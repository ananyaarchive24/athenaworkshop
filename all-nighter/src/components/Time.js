import React, { useState, useEffect } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="time-widget">
      <h3>Current Time</h3>
      <div className="time-display">{formatTime(currentTime)}</div>
    </div>
  );
}

export default Time;