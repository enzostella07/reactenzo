import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyAiiFVL4Zgem2861Wc1DZoT1S67PeYdudM",
  authDomain: "batsi-4bd97.firebaseapp.com",
  projectId: "batsi-4bd97",
  storageBucket: "batsi-4bd97.appspot.com",
  messagingSenderId: "561486002127",
  appId: "1:561486002127:web:2eb4c6cb42aed6eae004ba"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
