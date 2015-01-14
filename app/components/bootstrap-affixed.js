import Ember from 'ember';

/*
	Component just calls Bootstrap's affix function
	with the specified `top` value, using didInsertElement
	hook, because data attribute triggers are unreliable with
	Ember routing.
*/

export default Ember.Component.extend({
	top: 0,
	setupAffixed: function(){
		var $node = this.$();
		var top = this.get("top");

		$node.affix({
			offset: {
				top: top
			}
		});
	}.on("didInsertElement")
});
