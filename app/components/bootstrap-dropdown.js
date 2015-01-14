import Ember from 'ember';

/*
	Component presents a dropdown navigation menu.
*/

export default Ember.Component.extend({
	title: "Dropdown", // Appears on the dropdown button.
	list: null, // List of models to present
	itemRoute: "", // Route name to navigate to -- Assumes <itemRoute>/<item.id> will be the model url.
	itemDisplayProperty: "", // Property name to present in the list for each item

	itemTuples: function(){
		var list = this.get("list");
		var itemDisplayProperty = this.get("itemDisplayProperty");

		var listByDisplayProperty = list.map(function(item){
			return {
				display: item.get(itemDisplayProperty),
				item: item
			};
		});

		return listByDisplayProperty;
	}.property("list", "itemDisplayProperty")
});
