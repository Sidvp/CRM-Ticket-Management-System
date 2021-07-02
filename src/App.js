import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';

// Import button:
// import { moduleName } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import { Jumbotron } from 'react-bootstrap';

import { Login } from './views/login/Login.page';

function App() {
  return (
    <div className="App">
     
      {/* Hello World */}
      {/* <Button>Test Button</Button> */}
      {/* <Jumbotron className="form-box"> Page </Jumbotron> */}
      <Login />
     
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
