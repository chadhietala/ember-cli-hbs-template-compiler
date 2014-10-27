var hbsCompile = require('broccoli-ember-hbs-template-compiler');

module.exports = {
  name: 'ember-cli-hbs-template-compiler',

  included: function ( app ) {
    this._super.included.apply( this, arguments );
    app.registry.add('template', {
      name: 'ember-cli-hbs-template-compiler',
      ext: ['hbs', 'handlebars'],
      toTree: function (tree) {
        return hbsCompile(tree);
      }
    });
  }
};
