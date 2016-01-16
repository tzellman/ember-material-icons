/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-icons',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.eot', {
        destDir: 'fonts'
    });
    app.import(app.bowerDirectory + '/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.svg', {
      destDir: 'fonts'
    });
    app.import(app.bowerDirectory + '/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.ttf', {
      destDir: 'fonts'
    });
    app.import(app.bowerDirectory + '/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff', {
      destDir: 'fonts'
    });
    app.import(app.bowerDirectory + '/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff2', {
      destDir: 'fonts'
    });
    app.import(app.bowerDirectory + '/material-design-iconic-font/dist/css/material-design-iconic-font.min.css');
  }
};
