import React, { useState } from 'react';

function ActivityLog(){
  // track energy drinks count
  const [drinkCount, setDrinkCount] = useState(0);
  // animation state
  const [animateNumber, setAnimateNumber] = useState(false);

  // when user adds a drink
  const addDrink = () => {
    setDrinkCount(drinkCount + 1);
    setAnimateNumber(true);
    // stop animation after it plays
    setTimeout(() => setAnimateNumber(false), 600);
  };

  // when user removes a drink
  const removeDrink = () => {
    if (drinkCount > 0) {
      setDrinkCount(drinkCount - 1);
      setAnimateNumber(true);
      setTimeout(() => setAnimateNumber(false), 600);
    }
    // else do nothing if already at 0
  };

  // these will be used later
  //const [waterReminders, setWaterReminders] = useState(0); for thr hydration popups
  //const [workTime, setWorkTime] = useState(0); to take a strict break, the person should not be able to dismiss the specific timer based popup
  //const [doneTasks, setDoneTasks] = useState(0); to show tasks that are done in the activity log, but lot of logic required so will do later

  return(
    <div className="activity-log">
      <h1 className="activitylog-header">Log</h1>
      
      <div className="log-item">
        <div className="log-label">Energy Drinks:</div>
        <div className="drink-counter">
          <button onClick={removeDrink}>-</button>
          <span className={`count ${animateNumber ? 'pulse' : ''}`}>
            {drinkCount}
          </span>
          <button onClick={addDrink}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ActivityLog;