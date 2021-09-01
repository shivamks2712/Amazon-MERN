import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './ServiceWorker';
import {StateProvider} from './StateProvider';
import reducer,{initialState} from './reducer';

ReactDOM.render(
<React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
     <App/>
</StateProvider> 
</React.StrictMode>,
document.getElementById('root'));

// serviceWorker.unregister();
