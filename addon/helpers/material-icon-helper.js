import Ember from 'ember';

export function materialIconHelper(params) {
  if (Ember.isEmpty(params)) return;

  return Ember.String.htmlSafe(`<i class="zmdi zmdi-${params[0]}">`);
}

export default Ember.Helper.helper(materialIconHelper);
