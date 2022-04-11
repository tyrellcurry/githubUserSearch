import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Content from './components/Content';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Navbar />
      <Search />
      <Content />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// lightToggle();
