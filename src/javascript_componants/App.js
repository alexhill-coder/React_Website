import logo from '../images/logo.png';
import '../css/App.css';
import Header from './custom_componants/header';

import React from "react";


function App() {

  let isLoggedIn = true;

  let [header, stateChange] = React.useState(<Header bool={false} onClick={logInOut} />);


  function logInOut() {

    isLoggedIn === true ? stateChange(<Header bool={true} onClick={logInOut} />) : stateChange(<Header bool={false} onClick={logInOut} />);

    isLoggedIn = !isLoggedIn;
  }

  return (
   
    <div>
      {header}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
