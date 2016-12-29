import Ember from 'ember';
import layout from '../templates/components/material-icon';
const {Component, computed} = Ember;

var MaterialIconComponent = Component.extend({
  layout: layout,

  tagName: 'i',
  classNames: ['material-icons'],
  attributeBindings: ['title', 'style', 'alt', 'ariaHiddenAttribute:aria-hidden'],

  iconClass: Ember.computed('icon', 'positionalIcon', function () {
    var icon = this.getWithDefault('positionalIcon', this.get('icon'));

    return icon;
  }),

  ariaHiddenAttribute: computed('ariaHidden', function () {
    return this.get('ariaHidden') !== false ? 'true' : undefined;
  })

});

MaterialIconComponent.reopenClass({
  positionalParams: ['positionalIcon']
});

export default MaterialIconComponent;
