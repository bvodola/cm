import { Meteor } from 'meteor/meteor';
import React , {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Loading from './layouts/Loading.jsx';
import Main from './layouts/Main.jsx';
import Home from './components/Home.jsx';

import AdminHome from './admin/components/AdminHome.jsx';

// =================
// Routes Definition
// =================
const Routes = (
	<Route>
		<Route component={Main}>
			<Route path='/' component={Home} />
		</Route>
		<Route path='/admin'>
			<IndexRoute component={AdminHome} />
		</Route>
	</Route>
);

class App extends Component {
	render() {
		return (<Router history={browserHistory} routes={Routes} />);
	}
}

export default App;
export { Routes };
