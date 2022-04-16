import React, {useState} from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Content from './Content';
import useLocalStorage from 'use-local-storage';

function App() {
  const [userData, setUserData] = useState({});
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    newTheme === 'light'
      ? (document.body.style = 'background-color: #101d2e;')
      : (document.body.style = 'background-color: #c2dcff;');
  };

  return (
    <div className="wrapper" data-theme={theme}>
      <main data-theme={theme}>
        <Navbar theme={theme} switchTheme={switchTheme} />
        <Search theme={theme} setUserData={setUserData} />
        <Content theme={theme} userData={userData} />
      </main>
    </div>
  );
}

export default App;
