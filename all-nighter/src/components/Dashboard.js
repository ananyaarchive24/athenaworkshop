import React from 'react';
import Header from './Header';
import Guides from './Guides';
import Todo from './Todo';
import ActivityLog from './ActivityLog';
import Timer from './Timer';
import Time from './Time';
import Music from './Music';

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header at the top */}
      <Header />
      
      
      <div className="dashboard-grid">
        {/* Left column */}
        <div className="left-column">
          {/* Guides panel */}
          <Guides />
          {/* Todo list */}
          <Todo />
        </div>
        
        {/* Right column */}  
        <div className="right-column">
          {/* Activity log */}
          <ActivityLog />
          
          <div className="widgets-row">
            {/* Timer + Time widgets row */}
          
          
            {/* Timer */}
            <Timer />
            {/* Time display */}
            <Time />
          </div>
          
          {/* Music panel */}
            <Music />

        </div>
      </div>
    </div>
  );
}

export default Dashboard;