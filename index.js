/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-icons',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/material-icons.css');
  }
};
