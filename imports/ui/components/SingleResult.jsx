import React, { Component } from 'react';

class SingleResult extends Component {

	render() {
		return (
			<div className="single-result">

				<header>
				<div className="title">
					<h1>Chevrolet Opala</h1>
					<h2>4.1 SS Gasolina 2P Manual 1977/1977</h2>
				</div>
				<div className="price-and-contact">
					<p className="price">R$ 10.000</p>
					<p className="contact">Alfredo - (11) 99966-9966</p>
				</div>
				</header>

				<div className="image-gallery-wrapper">
        	<img src="https://s-media-cache-ak0.pinimg.com/originals/de/6a/79/de6a79838485f5eaf8f221967aa762d0.jpg" alt=""/>
				</div>

				<h3>Informações</h3>
				<ul className="features">
					<div className="row">
						<div className="col s12 m12 l6">
							<li>Ano: 1977/1977</li>
							<li>Km: 120.000 km</li>
							<li>Cor: Laranja</li>
							<li>Câmbio: Manual</li>
						</div>
						<div className="col s12 m12 l6">
						<li>Portas: 4</li>
						<li>Combustível: Gasolina</li>
						<li>Final da Placa: 7</li>
						<li>Carroceria: Coupé</li>
						</div>
						<li>Data do Anúncio: 20/02/2002</li>
					</div>
				</ul>
				<h3>Opcionais</h3>
				<ul className="optionals">

					<li>Ar Condicionado</li>
					<li>Rodas de Liga Leve</li>
					<li>Vidros Elétricos</li>
				</ul>
				<ul className="extras">
					<li>Único Dono</li>
					<li>Aceita Troca</li>
				</ul>
				<h3>Descrição</h3>
				<p className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum blandit sollicitudin.
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Nunc ultricies hendrerit lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
					per inceptos himenaeos. Etiam risus libero, gravida sed lacinia ut, mollis sit amet dui. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Fusce molestie venenatis lorem, eleifend tristique massa
					rutrum eu. Aliquam convallis, urna ac tempor congue, massa ipsum feugiat dolor, at aliquet velit nunc
					vel urna. Mauris non placerat est. Morbi tincidunt orci eget mauris lobortis hendrerit.
					Cras sit amet ex vel mi convallis facilisis eget egestas turpis. Duis fermentum nisi ac
					dui sodales mollis at quis elit. Vivamus quam ex, rhoncus vitae fermentum ut, tincidunt ut nisi.
					Morbi et libero vel neque suscipit tincidunt. Donec sit amet tincidunt arcu, vel auctor urna.
				</p>
			</div>
		);
	}
}

export default SingleResult;
