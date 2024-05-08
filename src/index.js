import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {createStore} from 'redux'
// import reducer from "./pages/redux/reducer";
import {Provider} from "react-redux";
import store from './counterPage/Store';
import {BrowserRouter} from  'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

