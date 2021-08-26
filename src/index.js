import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './css/index.css';
import store from './Store/configureStore'
import App from './pages/App'



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);

