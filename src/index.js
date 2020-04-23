import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const notificationProps = {
  message: "Shoulhd we bake a pie?",
  type: "message",
  accept: () => console.log("ACCEPT"),
  decline: () => console.log("DECLINE")
};

ReactDOM.render(
  <React.StrictMode>
    <App notification={{ ...notificationProps }}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
