import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppContextProvider from './data/AppContextProvider';
import GameContextProvider from './data/GameContextProvider';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

ReactDOM.render(
	<AppContextProvider>
		<GameContextProvider>
			<App />
		</GameContextProvider>
	</AppContextProvider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Call the element loader after the app has been rendered the first time
defineCustomElements(window);