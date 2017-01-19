import 'react-hot-loader/patch';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App, { Routes } from '../imports/ui/App.jsx';
import { AppContainer } from 'react-hot-loader';

// =====================
// Server Side Rendering
// =====================
// import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

/*
	To add SSR, uncomment the line above and run the command below:
	meteor add reactrouter:react-router-ssr && meteor remove gadicc:ecmascript-hot && meteor add ecmascript
	Use this before launching your app to production
	To return to the HMR, comment the line above and run the following commands
	meteor remove reactrouter:react-router-ssr && meteor add gadicc:ecmascript-hot@=2.0.0-beta.6 && meteor remove ecmascript
*/

Meteor.startup(() => {

	let enableSSR = false;
	let enableHMR = !enableSSR;

	// If the Hot Module Replacement is enabled
	if(enableHMR) {
		console.log('enableHMR');
		render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

		if (module.hot) {
			module.hot.accept('../imports/ui/App.jsx', () => {
				const NextApp = require('../imports/ui/App.jsx').default;
				render(
					<AppContainer>
						<NextApp />
					</AppContainer>,
					document.getElementById('app')
				);
			});
		}

	}

	// If the Hot Module Replacement is not enabled
	else {
		console.log('enableSSR');
		// render(<App />, document.getElementById('app'));
		ReactRouterSSR.Run(Routes, {rootElement: 'app'});
	}

});
