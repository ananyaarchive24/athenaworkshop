import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState(new Date());

  // update time every second
  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup
    return () => clearInterval(clock);
  }, []);

  // show time in HH:MM format
  const getTimeString = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="time-widget">
      <div className="time-display">{getTimeString(time)}</div>
    </div>
  );
}

export default Time;