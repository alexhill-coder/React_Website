// Task 47.1 - This file is nearly identical to the intial starting page with the exception that some of 
// the file locations have changed in order to better manage the various componants. This file wasn't moved as it 
// created an error that was unable to be resolved.

// This file also contains the css locations for the index and the bootstrap componants.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './javascript_componants/App';
import reportWebVitals from './javascript_componants/default_componants/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
