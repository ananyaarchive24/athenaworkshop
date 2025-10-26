import React, { useState } from 'react';

function Guides() {
  // State to track which guide is expanded
  const [activeGuide, setActiveGuide] = useState(null);

  // clicking on the guide
        const openGuide = (guideId) => {
            setActiveGuide(guideId); // Always open the guide
        };

        const closeGuide = () => {
            setActiveGuide(null); // Always close the guide
        };


  

  return (
    <div className="guides-widget">
      <h3>Everything you need for the perfect all nighter</h3>
      
      <div className="guides-list">


        {/* Guide 1 */}
        <div className="guide-item">
          <div className="guide-header" onClick={() => openGuide(1)}>
            How to Pull the Perfect All Nighter
          </div>
          

        </div>

        {/* Guide 2 */}
        <div className="guide-item">
          <div className="guide-header" onClick={() => openGuide(2)}>
            Coffee Guide / Meal Plan
          </div>
           

        </div>

        {/* Guide 3 */}
        <div className="guide-item">
          <div className="guide-header" onClick={() => openGuide(3)}>
            What to Do Before
          </div>
            

        </div>

        {/* Guide 4 */}
        <div className="guide-item">
          <div className="guide-header" onClick={() => openGuide(4)}>
            What to Do After
          </div>
           

        </div>
      </div>
      {/* will add the content later */}
            {activeGuide && (
            <div className="guide-modal">
                <div className="modal-content">
                <div className="modal-header">
                    <h3>title</h3>
                    <button className="close-btn" onClick={closeGuide}>×</button>
                </div>
                <div className="modal-body">
                    <p>CONTENT {activeGuide}</p>
                </div>
                </div>
            </div>
            )}
    </div>
  );
}

export default Guides;