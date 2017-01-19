import React, { Component } from 'react';
import SearchFormContainer from '../containers/SearchFormContainer';
import SearchResults from './SearchResults';
import SingleResult from './SingleResult';

class Home extends Component {

	render() {
		return (
			<div className="home">

					<nav>
						<div className="nav-wrapper">
							<a href="#" className="brand-logo">
								<img src="/img/logo-classic-motors.png" alt=""/>
							</a>
				      <ul id="nav-mobile" className="right hide-on-med-and-down">
				        <li><a href="#">Comprar</a></li>
				        <li><a href="#">Anunciar</a></li>
				        <li><a href="#">Minha Conta</a></li>
				      </ul>
						</div>
					</nav>

				<main>
					<div className="col search-form-wrapper">
						<SearchFormContainer />
					</div>
					<div className="col search-results-wrapper">
						<SearchResults />
					</div>
					<div className="col single-result-wrapper">
						<SingleResult />
					</div>
				</main>

			</div>
		);
	}
}

export default Home;
