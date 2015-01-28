import DS from 'ember-data';

var Intrigue = DS.Model.extend({
	name: DS.attr("string"),
	type: DS.attr("string", { defaultValue: "Attack" }), // Attack or Utility -- Mandatory Quests are stored as Quest models.
	expansion: DS.attr("string", { defaultValue: "Base" }),
	effect: DS.attr("string")
});

// 24 base, 19 undermountain, 16 skullport
// 6 / 3 / 3 mandatory quests
Intrigue.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Ambush",
			effect: "Each opponent removes a fighter from his or her Tavern and returns it to the supply.  For each opponent that could not do so, take a fighter from the supply and place it in your Tavern."
		},
		{
			id: 2,
			name: "Arcane Mishap",
			effect: "Each opponent removes a wizard from his or her Tavern and returns it to the supply.  For each opponent that could not do so, draw an Intrigue card."
		},
		{
			id: 3,
			name: "Assassination",
			effect: "Each opponent removes a rogue from his or her Tavern and returns it to the supply.  For each opponent that could not do so, take 2 gold from the supply and place it in your Tavern."
		},
		{
			id: 4,
			name: "Bribe Agent",
			effect: "Choose an action space containing an opponent's agent.  You use that space's action as though you had assigned an agent to it."
		},
		{
			id: 5,
			name: "Free Drinks!",
			effect: "Remove an adventurer from an opponent's Tavern, and then place it in your Tavern.",
		},
		{
			id: 6,
			name: "Lack of Faith",
			effect: "Each opponent removes a cleric from his or her Tavern and returns it to the supply.  For each opponent that could not do so, you score 2 points."
		},
		{
			id: 7,
			name: "Accelerate Plans",
			type: "Utility",
			effect: "Choose 1 of your agents assigned to Waterdeep Harbor.  Return it to your pool, then immediately assign 2 agents."
		},
		{
			id: 8,
			name: "Bidding War",
			type: "Utility",
			effect: "Draw quests from the deck equal to the number of players.  Keep one and pass the remaining quests to the player on your left.  Each player, in turn, chooses one quest to keep and passes the rest to the left until every player has taken a quest."
		},
		{
			id: 9,
			name: "Call for Adventurers",
			type: "Utility",
			effect: "Take 2 adventurers from the supply and place them in your Tavern.  Each opponent takes an adventurers from the supply and places it in his or her Tavern."
		},
		{
			id: 10,
			name: "Change of Plans",
			type: "Utility",
			effect: "Discard an uncompleted Quest.  Score 6 points.  Each opponent can choose to discard an uncompleted quest to score 3 points.  (You can discard a Mandatory Quest in this way.)"
		},
		{
			id: 11,
			name: "Conscription",
			type: "Utility",
			effect: "Take 2 fighters from the supply and place them in your Tavern.  Choose 1 opponent.  That opponent takes a fighter from the supply and places it in his or her Tavern."
		},
		{
			id: 12,
			name: "Crime Wave",
			type: "Utility",
			effect: "Take 2 rogues from the supply and place them in your Tavern.  Choose 1 opponent.  That opponent takes a rogue from the supply and places it in his or her Tavern."
		},
		{
			id: 13,
			name: "Good Faith",
			type: "Utility",
			effect: "Take 2 clerics from the supply and place them in your Tavern.  Choose 1 opponent.  That opponent takes a cleric from the supply and places it in his or her Tavern."
		},
		{
			id: 14,
			name: "Graduation Day",
			type: "Utility",
			effect: "Take 2 wizards from the supply and place them in your Tavern.  Choose 1 opponent.  That opponent takes a wizard from the supply and places it in his or her Tavern."
		},
		{
			id: 15,
			name: "Real Estate Deal",
			type: "Utility",
			effect: "Discard a Building under your control that currently has no agent assigned to it.  Then choose 1 Building in Builder's Hall and put it in play under your control at no cost.  (Replace that Building afterward.)"
		},
		{
			id: 16,
			name: "Recall Agent",
			type: "Utility",
			effect: "Return 1 of your assigned agents to your pool."
		},
		{
			id: 17,
			name: "Recruit Spies",
			type: "Utility",
			effect: "Take 2 rogues from the supply and place them in your Tavern.  Each opponent can choose to give you a rogue once to score 3 points.  (Place it in your Tavern.)"
		},
		{
			id: 18,
			name: "Request Assistance",
			type: "Utility",
			effect: "Take 2 fighters from the supply and place them in your Tavern.  Each opponent can choose to give you a fighter once to score 3 points.  (Place it in your Tavern.)"
		},
		{
			id: 19,
			name: "Research Agreement",
			type: "Utility",
			effect: "Take 2 wizards from the supply and place them in your Tavern.  Each opponent can choose to give you a wizard once to score 5 points.  (Place it in your Tavern.)"
		},
		{
			id: 20,
			name: "Sample Wares",
			type: "Utility",
			effect: "Assign 1 of your unused agents to a Building in Builder's Hall.  You immediately use the effect of that Builder as though you controlled it."
		},
		{
			id: 21,
			name: "Special Assignment",
			type: "Utility",
			effect: "Choose a Quest type: Arcana, Commerce, Piety, Skullduggery, or Warfare.  Draw and reveal quests until you reveal a card of the chosen type.  Keep that quest and discard the rest."
		},
		{
			id: 22,
			name: "Spread the Wealth",
			type: "Utility",
			effect: "Take 4 gold from the supply and choose 1 opponent.  That opponent takes 2 gold from the supply."
		},
		{
			id: 23,
			name: "Summon the Faithful",
			type: "Utility",
			effect: "Take 2 clerics from the supply and place them in your Tavern.  Each opponent can choose to give you a cleric once to score 5 points.  (Place it in your Tavern.)"
		},
		{
			id: 24,
			name: "Tax Collection",
			type: "Utility",
			effect: "Take 4 gold from the supply.  Each opponent can choose to pay you 4 gold once to score 4 points."
		},
		{
			id: 25,
			name: "Call for Assistance",
			expansion: "Undermountain",
			effect: "Choose 1 opponent.  Remove 2 fighters, 2 rogues, or a fighter and rogue from his or her Tavern and place them in your Tavern."
		},
		{
			id: 26,
			name: "Demolish",
			expansion: "Undermountain",
			effect: "Choose 1 Building in play that has no agent assigned to it and discard it.  If you were not the owner, pay the Gold cost of that Building to its owner.  Put 1 Building in Builder's Hall in play under your control at no cost."
		},
		{
			id: 27,
			name: "Ineviable Betrayal",
			expansion: "Undermountain",
			effect: "Choose 1 opponent.  Remove an adventurer and 2 gold from his or her Tavern and place them in your Tavern.  Give this card to the chosen opponent after playing it."
		},
		{
			id: 28,
			name: "Manipulate",
			expansion: "Undermountain",
			effect: "Choose an action space containing an opponent's agent and move that agent to an unoccupied action space.  The opponent can take the new space's action.  Then assign 1 of your unassigned agents."
		},
		{
			id: 29,
			name: "Preferential Treatment",
			expansion: "Undermountain",
			effect: "Take 2 gold from the supply and place it in your Tavern.  Take starting player."
		},
		{
			id: 30,
			name: "Allied Faiths",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Give 1 opponent a cleric from your Tavern and score 8 points."
		},
		{
			id: 31,
			name: "Architectural Innovation",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Take 2 gold from the supply and place it in your Tavern.  You can purchase 1 face-up Building in Builder's Hall."
		},
		{
			id: 32,
			name: "Friendly Loan",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Give 1 opponent 4 gold from your Tavern and score 8 points."
		},
		{
			id: 33,
			name: "Honor Among Thieves",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Give 1 opponent 2 rogues from your Tavern and score 8 points."
		},
		{
			id: 34,
			name: "Information Broker",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Draw 3 Intrigue cards.  Each opponent draws 1 Intrigue card."
		},
		{
			id: 35,
			name: "Mercenary Contract",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Give 1 opponent 2 fighters from your Tavern and score 8 points."
		},
		{
			id: 36,
			name: "Open Lord",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Reveal your Lord card and discard any of your uncompleted Mandatory Quests.  For teh rest of the game, you cannot be affected by Attack and Mandatory Quest Intrigue cards played by opponents."
		},
		{
			id: 37,
			name: "Organized Crime",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Take 2 rogues from the supply and place them in your Tavern.  Place a rogue from the supply on each of 2 different action spaces."
		},
		{
			id: 38,
			name: "Proselytize",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Take a cleric from the supply and place it in your Tavern.  Place a cleric from the supply on any action space."
		},
		{
			id: 39,
			name: "Recruitment Drive",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Take 2 fighters from the supply and place them in your Tavern.  Place a fighter from the supply on each of 2 different action spaces."
		},
		{
			id: 40,
			name: "Sponsor Apprentices",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Take a wizard from the supply and place it in your Tavern.  Place a wizard from the supply on any action space."
		},
		{
			id: 41,
			name: "Tax Revolt",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Take 4 gold from the supply and place it in your Tavern.  Place 2 gold from the supply on each of 2 different action spaces."
		},
		{
			id: 42,
			name: "Unexpected Success",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Draw 2 Intrigue cards.  As you draw each card, you can play it immediately as part of this action."
		},
		{
			id: 43,
			name: "Unlikely Assistance",
			type: "Utility",
			expansion: "Undermountain",
			effect: "Give 1 opponent a wizard from your Tavern and score 8 points."
		},
		{
			id: 44,
			name: "Blackmail",
			expansion: "Skullport",
			effect: "Choose 1 opponent.  Remove 2 gold from his or her Tavern and place it in your Tavern.  Look at that opponent's Lord card."
		},
		{
			id: 45,
			name: "Doppelganger",
			expansion: "Skullport",
			effect: "Choose an action space containing an agent of an opponent with more corruption than you.  You use that space's action as though you had assigned an agent to it."
		},
		{
			id: 46,
			name: "Expose Corruption",
			expansion: "Skullport",
			effect: "Each opponent with more corruption than you takes 1 corruption from the Corruption track and places it in his or her Tavern."
		},
		{
			id: 47,
			name: "Foist Responsibility",
			expansion: "Skullport",
			effect: "Take 1 corruption from the Corruption track, place it in your Tavern, and give 1 of your uncompleted Mandatory Quests to an opponent with at least 1 corruption."
		},
		{
			id: 48,
			name: "Forge Deed",
			expansion: "Skullport",
			effect: "Take 2 corruption from the Corruption track, place them in your Tavern, and gain control of 1 Building under an opponent's control."
		},
		{
			id: 49,
			name: "Black Market Money",
			type: "Utility",
			expansion: "Skullport",
			effect: "Take 9 gold from the supply and 1 corruption from the Corruption track and place them in your Tavern.  Each opponent can take 4 gold and 1 corruption and place them in his or her Tavern."
		},
		{
			id: 50,
			name: "Bribe the Watch",
			type: "Utility",
			expansion: "Skullport",
			effect: "Spend 2 gold: Return up to 2 corruption from your Tavern to the Corruption track.  Each opponent can spend 4 gold to return 1 corruption to the Corruption track."
		},
		{
			id: 51,
			name: "Corrupting Influence",
			type: "Utility",
			expansion: "Skullport",
			effect: "Place 1 corruption from the Corruption track on each of 2 different action spaces."
		},
		{
			id: 52,
			name: "Dark Dagger Assassination",
			type: "Utility",
			expansion: "Skullport",
			effect: "Take 4 rogues from the supply and 1 corruption from the Corruption track, and place them in your Tavern.  Each opponent can take 2 rogues and 1 corruption and place them in his or her Tavern."
		},
		{
			id: 53,
			name: "Donations for Cyric",
			type: "Utility",
			expansion: "Skullport",
			effect: "Take 2 clerics from the supply and 1 corruption from the Corruption track, and place them in your Tavern.  Each opponent can take a cleric and 1 corruption and place them in his or her Tavern."
		},
		{
			id: 54,
			name: "Honorable Example",
			type: "Utility",
			expansion: "Skullport",
			effect: "Score 6 points if each opponent has more corruption than you."
		},
		{
			id: 55,
			name: "Iron Ring Slaves",
			type: "Utility",
			expansion: "Skullport",
			effect: "Take 4 fighters from the supply and 1 corruption from the Corruption track, and place them in your Tavern.  Each opponent can take 2 fighters and 1 corruption and place them in his or her Tavern."
		},
		{
			id: 56,
			name: "Mind Flayer Mercenaries",
			type: "Utility",
			expansion: "Skullport",
			effect: "Take 2 wizards from the supply and 1 corruption from the Corruption track, and place them in your Tavern.  Each opponent can take a wizard and 1 corruption and place them in his or her Tavern."
		},
		{
			id: 57,
			name: "Release the Hounds",
			type: "Utility",
			expansion: "Skullport",
			effect: "Take 3 corruption from the Corruption track and remove them from the game."
		},
		{
			id: 58,
			name: "Repent",
			type: "Utility",
			expansion: "Skullport",
			effect: "Return 1 corruption from your Tavern to the Corruption track."
		},
		{
			id: 59,
			name: "Scapegoat",
			type: "Utility",
			expansion: "Skullport",
			effect: "Return 1 adventurer to the supply and up to 2 corruption to the Corruption track from your Tavern.  Each opponent can return 2 adventurers and 1 corruption from his or her Tavern."
		},
		{
			id: 60,
			name: "Rapid Expansion",
			type: "Utility",
			expansion: "Promotion",
			effect: "Pay 5 gold.  Look at the top 5 Buildings in the Building stack.  Put 1 of those Buildings into play under your control at no cost and put the rest on the bottom of the stack."
		}
	]
});

export default Intrigue;
