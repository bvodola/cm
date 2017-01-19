import React, { Component } from 'react';
import { DataSelect } from '../helpers/Helpers';

class SearchForm extends Component {

  componentDidMount() {
    $('select').material_select();
  }

	render() {
		return (
			<div className="search-form">

        <div className="section">
          <h2>REFINAR BUSCA</h2>

          {/* ******** */}
          {/* Location */}
          {/* ******** */}
          <div className="row">
            <div className="input-field col s12">
            <input id="location" type="text" className="autocomplete" placeholder="Localização"/>
            </div>
          </div>


          <div className="row">
            <h3>Marca e Modelo</h3>
            {/* **** */}
            {/* Make */}
            {/* **** */}
            <div className="input-field col s12">
              <DataSelect defaultValue="" placeholder="Selecionar Marca" data={this.props.makes} />
            </div>

            {/* ***** */}
            {/* Model */}
            {/* ***** */}
            <div className="input-field col s12">
              <select defaultValue="">
                <option value="" disabled>Selecionar Modelo</option>
                <option value="1">Opala</option>
                <option value="2">Galaxy</option>
              </select>
            </div>
          </div>


          {/* ***** */}
          {/* Years */}
          {/* ***** */}
          <div className="row">
            <h3>Ano</h3>
            <div className="input-field col s12">
              <select defaultValue="">
                <option value="" disabled>Ano Mínimo</option>
                <option value="1">1990</option>
                <option value="2">1991</option>
              </select>
            </div>
            <div className="input-field col s12">
              <select defaultValue="">
                <option value="" disabled>Ano Máximo</option>
                <option value="1">1991</option>
                <option value="2">1992</option>
              </select>
            </div>
          </div>

          {/* ***** */}
          {/* Price */}
          {/* ***** */}
          <div className="row">
            <h3>Preço</h3>
            <div className="input-field col s12">
              <select defaultValue="">
                <option value="" disabled>Preço Mínimo</option>
                <option value="1">R$ 10.000</option>
                <option value="1">R$ 20.000</option>
              </select>
            </div>
            <div className="input-field col s12">
              <select defaultValue="">
                <option value="" disabled>Preço Máximo</option>
                  <option value="1">R$ 10.000</option>
                  <option value="1">R$ 20.000</option>
              </select>
            </div>
          </div>

          {/* ******* */}
          {/* Mileage */}
          {/* ******* */}
          <div className="row">
            <h3>Quilometragem</h3>
            <div className="input-field col s12">
              <select>
                <option value="" disabled>KM Mínimo</option>
                <option value="1">10.000 km</option>
                <option value="1">20.000 km</option>
              </select>
            </div>
            <div className="input-field col s12">
              <select>
                <option value="" disabled>KM Máximo</option>
                  <option value="1">10.000 km</option>
                  <option value="1">20.000 km</option>
              </select>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Mais Opções</h2>

          {/* **** */}
          {/* Gear */}
          {/* **** */}
          <div className="row">
            <h3>Câmbio</h3>
            <div className="col s12">

              <p>
                <input className="filled-in" id="mecanicGear" type="checkbox"/>
                <label htmlFor="mecanicGear">Manual</label>
              </p>
              <p>
                <input className="filled-in" id="automaticGear" type="checkbox"/>
                <label htmlFor="automaticGear">Automático</label>
              </p>
            </div>
          </div>

          {/* **** */}
          {/* Fuel */}
          {/* **** */}
          <div className="row">
            <h3>Combustível</h3>
            <div className="col s12">

              <p>
                <input className="filled-in" id="gasolineFuel" type="checkbox"/>
                <label htmlFor="gasolineFuel">Gasolina</label>
              </p>
              <p>
                <input className="filled-in" id="alcoholFuel" type="checkbox"/>
                <label htmlFor="alcoholFuel">Álcool</label>
              </p>
            </div>
          </div>

          {/* ********* */}
          {/* Optionals */}
          {/* ********* */}
          <div className="row">
            <h3>Opcionais</h3>
            <div className="col s12">

              <p>
                <input className="filled-in" id="airbagOptional" type="checkbox"/>
                <label htmlFor="airbagOptional">Airbag</label>
              </p>
              <p>
                <input className="filled-in" id="alarmOptional" type="checkbox"/>
                <label htmlFor="alarmOptional">Alarme</label>
              </p>
              <p>
                <input className="filled-in" id="acOptional" type="checkbox"/>
                <label htmlFor="acOptional">Ar Condicionado</label>
              </p>
              <p>
                <input className="filled-in" id="hotAirOptional" type="checkbox"/>
                <label htmlFor="hotAirOptional">Ar Quente</label>
              </p>
              <p>
                <input className="filled-in" id="seatOptional" type="checkbox"/>
                <label htmlFor="seatOptional">Banco com regulagem de altura</label>
              </p>
            </div>
          </div>
        </div>


			</div>
		);
	}
}

export default SearchForm;
