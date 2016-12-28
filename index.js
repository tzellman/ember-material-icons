/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-icons',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/material-icons.css');

    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.eot', {
      destDir: 'assets/fonts'
    });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff2', {
      destDir: 'assets/fonts'
    });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff', {
      destDir: 'assets/fonts'
    });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.ttf', {
      destDir: 'assets/fonts'
    });
  }
};
