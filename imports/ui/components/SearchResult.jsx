import React, { Component } from 'react';

class SearchResult extends Component {

	render() {
		return (
			<div className="search-result">
        <ul className="result">
          <li>
            <div className="row">
              <div className="col l6">
                <img src="https://s-media-cache-ak0.pinimg.com/originals/de/6a/79/de6a79838485f5eaf8f221967aa762d0.jpg" alt=""/>
              </div>
              <div className="col l6">
                <h2>Chevrolet Opala</h2>
                <h3>4.1 SS Gasolina 2P Manual</h3>
                <p className="price">R$ 10.000</p>
								<ul className="features">
									<li className="year"><i className="fa fa-calendar"></i>1977/1977</li>
									<li className="km"><i className="fa fa-road"></i>120.000 km</li>
									<li className="color"><i className="fa fa-adjust"></i>Laranja</li>
									<li className="gear"><i className="fa fa-gear"></i>Manual</li>
								</ul>
                <ul className="extras">
                  <li>Único Dono</li>
                  <li>Aceita Troca</li>
                </ul>
                <div className="about">
                  <p className="location"><i className="fa fa-map-marker"></i>São Paulo (SP)</p>
                  <p className="owner"><i className="fa fa-user"></i>Loja</p>
                </div>
            </div>
            </div>
          </li>
        </ul>
			</div>
		);
	}
}

export default SearchResult;
