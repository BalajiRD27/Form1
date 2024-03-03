import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StepContext from './components/StepContext';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StepContext>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StepContext>
);

