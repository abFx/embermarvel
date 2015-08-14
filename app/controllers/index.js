import Ember from 'ember';

export default Ember.Controller.extend({
  isLoading: false,
  marvelApi : Ember.inject.service('marvel-api'),
  actions : {
    loadMore: function(){
      var newLimit = this.get('model').limit+10;
      //show loading
      this.set('isLoading', true);
      //new api request
      this.get('marvelApi').getHeroes({ "limit" : newLimit }).then(function(response){
        this.set('model', response);
        this.set('isLoading', false);
      }.bind(this));
    }
  }
});
