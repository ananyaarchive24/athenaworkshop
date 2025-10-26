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
      {/* heading */}
      <Header />
      
      
      <div className="dashboard-grid">
        {/* the left column will hv */}
        <div className="left-column">
          {/* the 4 guides */}
          <Guides />
          {/* a to do list */}
          <Todo />
        </div>
        
        {/* right col */}  
        <div className="right-column">
          {/* energy drink counter (as of now) */}
          <ActivityLog />
          
          <div className="widgets-row">
            {/* time + timer */}
          
          {/* time */}
            <Time />
            {/* timer */}
            <Timer />
            

            
          </div>
          
          {/* embedded playlists */}
            <Music />

        </div>
      </div>
    </div>
  );
}

export default Dashboard;