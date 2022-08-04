import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HookState from './HookState';
import HookEffect from './HookEffect';
import HookRef from './HookRef';
import reportWebVitals from './reportWebVitals';
import HookMemo from './HookMemo';
import CustomHook from './CustomHook';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookState />
    <HookEffect />
    <HookRef />
    <HookMemo />
    <CustomHook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
