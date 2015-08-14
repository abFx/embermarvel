import Ember from 'ember';

export default Ember.Route.extend({
  marvelApi : Ember.inject.service('marvel-api'),
  beforeModel: function(){
    this.get('marvelApi').getHeroes({ "limit" : "10" }).then(function(response){
      console.log(response);
    });
  },
  model: function(params){
    return Ember.$.get("https://gateway.marvel.com/v1/public/characters?limit=30&apikey=99d7fa0a888391fb9ea7fcaf0c7e05d2").then(function(response){
      return response.data;
    });
  }
});
