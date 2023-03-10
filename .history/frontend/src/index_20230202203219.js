import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';
import { Provider } from './Redux/store.js';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
