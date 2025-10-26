import React from 'react';
// wanted to create a theme switcher think where the user can decide the themes, but didnt get enough time, and it didnt work the first time i tried so maybe later.

function SwitchThemes ({ currentTheme, onThemeChange }) {
  const themes = [
    //{ id: 'default', name: 'Midnight', color: '#00A3FF' },
    //{ id: 'cyberpunk', name: 'Cyberpunk', color: '#00FF88' },
   // { id: 'crimson', name: 'Hacker', color: '#FF1744' }
  ];

  return (
    <div className="theme-switcher">
      <label>Theme: </label>
      <div className="theme-buttons">
        {themes.map(theme => (
          <button
          >
           
          </button>
        ))}
      </div>
    </div>
  );
}

export default SwitchThemes;