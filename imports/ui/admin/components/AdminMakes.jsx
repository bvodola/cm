import React, { Component } from 'react';
import { Helpers } from '../../helpers/Helpers.jsx';
import { Makes } from '../../../api/makes.js';

class AdminMakes extends Component {

  handleSubmit(event) {
    event.preventDefault();
    let query = Helpers.getRefValues(this.refs);
    Makes.insert(query);
  }

  render() {
    return(
      <div className="admin-makes">
        <div className="makes-list">
          List of Makes:
          {this.props.makes.map((make) => (
            <div key={make._id}>{make.name}</div>
          ))}
        </div>
        <div className="add-make">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" name="name" ref="name" />
            <button className="waves-effect waves-light btn red accent-4" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminMakes;
