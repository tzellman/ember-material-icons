module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(app) {
    return this.addBowerPackageToProject('material-design-iconic-font');
  }
};
