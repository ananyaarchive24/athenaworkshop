import React from 'react';

function SwitchThemes ({ currentTheme, onThemeChange }) {
  const themes = [
    { id: 'default', name: 'Midnight', color: '#00A3FF' },
    { id: 'cyberpunk', name: 'Cyberpunk', color: '#00FF88' },
    { id: 'crimson', name: 'Crimson', color: '#FF1744' }
  ];

  return (
    <div className="theme-switcher">
      <label>Theme: </label>
      <div className="theme-buttons">
        {themes.map(theme => (
          <button
            key={theme.id}
            className={`theme-btn ${currentTheme === theme.id ? 'active' : ''}`}
            onClick={() => onThemeChange(theme.id)}
            style={{ '--theme-color': theme.color }}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SwitchThemes;