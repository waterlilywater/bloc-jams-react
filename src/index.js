import React from 'react'; //This imported object contains methods that I need in order to use React. The object is called the React library.
import ReactDOM from 'react-dom'; //The methods imported from 'react-dom' are meant for interacting with the DOM.
import { BrowserRouter } from 'react-router-dom'; //
import './index.css';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
