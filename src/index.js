import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

const root = ReactDOM.createRoot(document.getElementById('root'));
var firebaseConfig = {
  apiKey: "AIzaSyAQCsO7lIh6LVEmPcpWIUTzB79_oE4vHs0",
  authDomain: "music-1a349.firebaseapp.com",
  projectId: "music-1a349",
  storageBucket: "music-1a349.appspot.com",
  messagingSenderId: "54634832215",
  appId: "1:54634832215:web:75056ec141c23435a05e12"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
