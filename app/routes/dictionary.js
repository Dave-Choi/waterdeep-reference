import Ember from 'ember';
export default Ember.Route.extend({
	model: function(){
		var baseURL = "http://waterdeep-reference.herokuapp.com/";
		var keys = ["lord", "building", "quest", "intrigue"];
		var store = this.store;

		var dataHash = keys.reduce(function(previousValue, item){
			previousValue[item] = store.find(item);
			return previousValue;
		}, {});

		return Ember.RSVP.hash(dataHash)
		.then(function(hash){
			var tuples = [];

			keys.forEach(function(key){
				var items = hash[key].map(function(card){
					return {
						name: card.get("name"),
						url: baseURL + key + "s/" + card.get("id")
					};
				});
				tuples.addObjects(items);
			});

			tuples.sort(function(a, b){
				return b.name.length - a.name.length;
			});

			return tuples;
		});
	}
});
