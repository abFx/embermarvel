import Ember from 'ember';
import layout from '../templates/components/hero-thumbnail';

export default Ember.Component.extend({
  //layout: layout,
  tagName: 'img',
  classNames: ['hero-image'],
  attributeBindings: ['loader:src', 'icon-data-icon'],
  loader: 'http://placehold.it/150x150.png',
  iconImage: null,
  iconImagePath: Ember.computed('iconImage', function(){
    return this.get('iconImage').path+'.'+this.get('iconImage').extension;
  }),
  didInsertElement: function(){
    this.$().on('load', function(){
      console.log('loaded')
      if(this.get('iconImage') != null){
        this.set('loader', this.get('iconImagePath'))
      }
    }.bind(this));
  }
});
