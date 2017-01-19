import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import SearchForm from '../components/SearchForm.jsx';
import { Makes } from '../../api/makes.js';

export default SearchFormContainer = createContainer(() => {
  var handle = Meteor.subscribe("makes");

  return {
    loading: !handle.ready(),
    makes: Makes.find({}).fetch()
  };
}, SearchForm);
