import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AdminMakes from '../components/AdminMakes.jsx';
import { Makes } from '../../../api/makes.js';

export default AdminMakesContainer = createContainer(() => {
  var handle = Meteor.subscribe("makes");

  return {
    loading: !handle.ready(),
    makes: Makes.find({}).fetch()
  };
}, AdminMakes);
