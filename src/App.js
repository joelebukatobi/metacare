import React from 'react';
import Navbar from 'components/Navbar';
import Menu from 'components/Menu';
import Header from 'components/Header';
import Body from 'components/Body';

// Main Stylesheet
import 'assets/styles/main.scss';

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="dashboard">
          <Navbar />
          <div className="dashboard__container">
            <Menu />
            <Header />
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
