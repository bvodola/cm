import React from 'react';
import { setDefaultLoadingComponent } from 'react-komposer';
// import './sass/Loading.sass';

const Loading = () => (
	<div className="spinner">
		<div className="bounce1"></div>
		<div className="bounce2"></div>
		<div className="bounce3"></div>
	</div>
);

setDefaultLoadingComponent(Loading);
