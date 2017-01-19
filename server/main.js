import { Meteor } from 'meteor/meteor';
import { Makes } from '../imports/api/makes.js';

Meteor.publish('makes', () => ( Makes.find({}) ));
