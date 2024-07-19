import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
// import App from './App';
// import App3 from './App3';
import App4 from './App4';

// import store from './01_Redux_Basics/store';
// import store2 from './02_Middlewares/store2';
import store4 from './04_Thunk/store4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 5. provide store to the parent componet (index.js) */}
    <Provider store={store4}>
      <App4 />
    </Provider>
  </React.StrictMode>
);
