/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-icons',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/material-icons.css');
    app.import('vendor/fonts/MaterialIcons-Regular.eot', {
      destDir: 'assets/fonts'
    });
    app.import('vendor/fonts/MaterialIcons-Regular.woff2', {
      destDir: 'assets/fonts'
    });
    app.import('vendor/fonts/MaterialIcons-Regular.woff', {
      destDir: 'assets/fonts'
    });
    app.import('vendor/fonts/MaterialIcons-Regular.ttf', {
      destDir: 'assets/fonts'
    });
  }
};
