import './styles/globals.css';
import Dashboard from './components/Dashboard';
import ThemeSwitcher from './components/SwitchThemes';
import React, { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState('default');

  return (
    <div className={`app ${currentTheme}`}>
      <ThemeSwitcher 
        currentTheme={currentTheme} 
        onThemeChange={setCurrentTheme} 
      />
      <Dashboard />
    </div>
  );
}


export default App;