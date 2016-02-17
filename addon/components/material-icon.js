import Ember from 'ember';
import layout from '../templates/components/material-icon';

var PaperIconComponent = Ember.Component.extend({
  layout: layout,

  tagName: 'i',
  classNames: ['material-icons'],

  iconClass: Ember.computed('icon', 'positionalIcon', function() {
    var icon = this.getWithDefault('positionalIcon', this.get('icon'));
    return icon;
  })
});

PaperIconComponent.reopenClass({
  positionalParams: ['positionalIcon']
});

export default PaperIconComponent;
