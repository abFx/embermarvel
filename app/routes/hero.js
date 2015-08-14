import Ember from 'ember';

export default Ember.Route.extend({
  marvelApi : Ember.inject.service('marvel-api'),
  model: function(params){
    return this.get('marvelApi').getHeroes({ "id" : params.hero_id }).then(function(response){
      return response.results[0];
    });
  }
});
