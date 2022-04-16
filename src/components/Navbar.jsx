import React from 'react';
import '../style.css';

function Navbar({theme, switchTheme}) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <nav className="navbar" data-theme={theme}>
      <div className="nav-flex">
        <div className="brand">devfinder</div>
        <div className="light-toggle" id="toggle" onClick={switchTheme}>
          <div className="circle" id="circle"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
