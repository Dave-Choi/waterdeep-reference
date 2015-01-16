import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("quests", function() {
    this.resource("quest", {
      path: ":quest_id"
    });
  });

  this.resource("lords", function() {
    this.resource("lord", {
      path: ":lord_id"
    });
  });

  this.resource("intrigues", function() {
  	this.resource("intrigue", { path: ":intrigue_id" });
  });
  this.resource("buildings", function() {
  	this.resource("building", { path: ":building_id" });
  });
  this.route("dictionary");
});

export default Router;
