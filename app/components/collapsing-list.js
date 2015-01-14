import Ember from 'ember';

/*
	Component presents a set of Bootstrap list-group-items
	above the collapse point, and a dropdown list below the
	collapse point.

	The collapse point as it stands is just the xs Bootstrap size, and is non-configurable.
*/

export default Ember.Component.extend({
	title: "Dropdown Title", // Appears on the dropdown button
	list: null, // List of models to present
	itemRoute: "quest", // Route name to navigate to -- Assumes <itemRoute>/<item.id> will be the model url.
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
