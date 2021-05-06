import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

// const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyD_JgLti1YsMRZHFu9TmLpAObyxq6Yjwlc",
  authDomain: "evernote-clone-f5f5b.firebaseapp.com",
  projectId: "evernote-clone-f5f5b",
  storageBucket: "evernote-clone-f5f5b.appspot.com",
  messagingSenderId: "20859097239",
  appId: "1:20859097239:web:8771cd4b27020af44d19d2"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
