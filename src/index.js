import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import App from './pages/App'



ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);

