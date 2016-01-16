import Ember from 'ember';
import layout from '../templates/components/material-icon';

export default Ember.Component.extend({
  layout: layout,

  tagName: 'i',
  classNameBindings: [
    'iconClass',
    'sizeClass'
  ],

  iconClass: Ember.computed('icon', function() {
    return `zmdi zmdi-${this.get('icon')}`;
  }),

  sizeClass: Ember.computed('size', function() {
    if (!this.get('size')) return;

    return `zmdi-hc-${this.get('size')}`;
  })
});
