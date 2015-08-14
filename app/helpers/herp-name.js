import Ember from 'ember';

export function herpName(params, hash) {
  if(hash.title.length > 15){
		return hash.title.substr(0,10)+'...';
	}
	return hash.title;
}

export default Ember.Helper.helper(herpName);
