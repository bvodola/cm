import React, { Component } from 'react';
import AdminMakesContainer from '../containers/AdminMakesContainer';

class AdminHome extends Component {
  render() {
    return(
      <div>
        Admin
        <AdminMakesContainer />
      </div>
    );
  }
}

export default AdminHome;
