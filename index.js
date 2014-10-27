var hbsCompile = require('broccoli-ember-hbs-template-compiler');
var merge = require('lodash-node/modern/objects/merge');

var defaultOptions = {
  module: true
};

module.exports = {
  name: 'ember-cli-hbs-template-compiler',

  included: function (app) {
    this._super.included.apply(this, arguments);
    app.registry.add('template', {
      name: 'ember-cli-hbs-template-compiler',
      ext: ['hbs', 'handlebars'],
      toTree: function (tree) {
        var options = merge({}, defaultOptions, app.options.handlebars);
        return hbsCompile(tree, options);
      }
    });
  }
};
