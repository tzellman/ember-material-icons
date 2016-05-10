import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('material-icon', 'Integration | Component | material icon', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  var icon = "home";

  this.set('icon', icon);

  this.render(hbs`{{material-icon icon}}`);

  assert.equal(this.$().text().trim(), 'home');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#material-icon icon}}
    {{/material-icon}}
  `);

  assert.equal(this.$().text().trim(), 'home');
});
