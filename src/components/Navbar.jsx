import React from 'react';
import {DarkModeToggle} from 'react-dark-mode-toggle-2';
import '../style.css';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="nav-flex">
        <div className="brand">devfinder</div>
        <div className="light-toggle">
          <DarkModeToggle onChange={setIsDarkMode} isDarkMode={isDarkMode} />
        </div>
      </div>
    </nav>
  );
}

export default App;
