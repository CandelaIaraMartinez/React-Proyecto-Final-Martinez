import React from 'react';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyDxzIpmeQLAa_AOrIZUt5QJK9bHCIjzHPM',
  authDomain: 'react-e-commerce-54b29.firebaseapp.com',
  projectId: 'react-e-commerce-54b29',
  storageBucket: 'react-e-commerce-54b29.appspot.com',
  messagingSenderId: '111683491070',
  appId: '1:111683491070:web:22a58ef97e95b6537181af',
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

reportWebVitals();
