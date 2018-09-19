import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './style.css';
import App from './App';
//import Flipper from './Flipper';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*
ReactDOM.render(<Flipper date="24. Dezember" content="oh du fröhliche" orientation="vertical" />, document.getElementById('root'));
registerServiceWorker();
*/
