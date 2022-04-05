import React, { useState } from 'react';
import Navbar from 'components/Navbar';
import Menu from 'components/Menu';
import Header from 'components/Header';
import Body from 'components/Body';

// Main Stylesheet
import 'assets/styles/main.scss';

const App = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="container">
        <div className="dashboard">
          <Navbar toggle={toggle} style={open ? { display: 'block' } : { display: 'none' }} />
          <div className="dashboard__container">
            <Menu toggle={toggle} />
            <Header />
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
