import React, { useState } from 'react';

function ActivityLog(){
    //energy drinks
  const [energyDrinks, setEnergyDrinks] = useState(0); //these are energy drink counters
  const [isPulsing, setIsPulsing] = useState(false); 

  const increaseDrinks = () => {
    setEnergyDrinks(energyDrinks + 1);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 600);
  };

  const decreaseDrinks = () => {
    if (energyDrinks > 0) {
      setEnergyDrinks(energyDrinks - 1);
      setIsPulsing(true); 
      setTimeout(() => setIsPulsing(false), 600); 

    }
  };




  const [hydrationChecks, setHydrationChecks] = useState(0); //build this later when we schedule the poopups for hydration check ins
  const [deepWorkHours, setDeepWorkHours] = useState(0); //shows how many hours u worked
  const [tasksCompleted, setTasksCompleted] = useState(0); //to s





return(
    <div className="activity-log">
      <h1 className="activitylog-header">How it's going - your log</h1>
      
      <div className="log-item">
        <div className="log-label">Energy Drinks:</div>
        <div className="drink-counter">
          <button onClick={decreaseDrinks}>-</button>
            <span className={`count ${isPulsing ? 'pulse' : ''}`}>{energyDrinks}</span>
          <button onClick={increaseDrinks}>+</button>
        </div>
      </div>
    </div>
);
}
export default ActivityLog;