import DS from 'ember-data';

var Building = DS.Model.extend({
	name: DS.attr("string"),
	expansion: DS.attr("string", { defaultValue: "Base" }),
	cost: DS.attr("number", { defaultValue: 0 }),
	effect: DS.attr("string", { defaultValue: "" }),
	ownerBenefit: DS.attr("string", { defaultValue: "" })
});

Building.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Aurora's Realm Shop",
			effect: "Take 4 Gold from the supply and place it in your Tavern."
		},
		{
			id: 2,
			name: "Blackstaff Tower",
			effect: "Take 1 Wizard from the supply and place it in your Tavern."
		},
		{
			id: 3,
			name: "Builder's Hall",
			effect: "Choose 1 Building, pay its cost, and put it into play."
		},
		{
			id: 4,
			name: "Castle Waterdeep",
			effect: "Take the First Player marker, and draw 1 Intrigue card."
		},
		{
			id: 5,
			name: "Cliffwatch Inn 1",
			effect: "Take 1 face-up Quest card as well as take 2 Gold and place it in your Tavern."
		},
		{
			id: 6,
			name: "Cliffwatch Inn 2",
			effect: "Take 1 face-up Quest card and draw 1 Intrigue card."
		},
		{
			id: 7,
			name: "Cliffwatch Inn 3",
			effect: "Discard all the face-up Quest cards and draw new Quests from the Quest deck.  Then take 1 face-up Quest card from Cliffwatch Inn."
		},
		{
			id: 8,
			name: "Field of Triumph",
			effect: "Take 2 Fighters from the supply and place them in your Tavern."
		},
		{
			id: 9,
			name: "The Grinning Lion Tavern",
			effect: "Take 2 Rogues from the supply and place them in your Tavern."
		},
		{
			id: 9,
			name: "The Plinth",
			effect: "Take 1 Cleric from the supply and place it in your Tavern."
		},
		{
			id: 10,
			name: "Waterdeep Harbor",
			effect: "Play 1 Intrigue card from your hand."
		},
		{
			id: 11,
			name: "Caravan Court",
			cost: 4,
			effect: "When purchased/start of round, place 2 fighters on this space.  Take all fighters from this space.",
			ownerBenefit: "1 fighter"
		},
		{
			id: 12,
			name: "Dragon Tower",
			cost: 3,
			effect: "Take 1 wizard and 1 Intrigue card.",
			ownerBenefit: "1 Intrigue card"
		},
		{
			id: 13,
			name: "Fetlock Court",
			cost: 8,
			effect: "Take 2 fighters and 1 wizard.",
			ownerBenefit: "1 fighter or 1 wizard"
		},
		{
			id: 14,
			name: "The Golden Horn",
			cost: 4,
			effect: "When purchased/start of round, place 4 gold on this space.  Take all gold from this space.",
			ownerBenefit: "2 gold"
		},
		{
			id: 15,
			name: "Helmstar Warehouse",
			cost: 3,
			effect: "Take 2 rogues and 2 gold.",
			ownerBenefit: "1 rogue"
		},
		{
			id: 16,
			name: "Heroes' Garden",
			cost: 4,
			effect: "Take 1 face-up quest.  You may immediately complete that Quest.  If you do, score 4 points.",
			ownerBenefit: "2 points"
		},
		{
			id: 17,
			name: "House of Good Spirits",
			cost: 3,
			effect: "Take 1 fighter, 1 adventurer",
			ownerBenefit: "1 fighter"
		},
		{
			id: 18,
			name: "House of Heroes",
			cost: 8,
			effect: "Take 1 cleric and 2 fighters.",
			ownerBenefit: "1 cleric or 1 fighter"
		},
		{
			id: 19,
			name: "House of Wonder",
			cost: 4,
			effect: "Spend 2 gold: Take (1 cleric or 1 wizard) x 2",
			ownerBenefit: "2 gold"
		},
		{
			id: 20,
			name: "House of the Moon",
			cost: 3,
			effect: "Take 1 cleric and take 1 face-up quest.",
			ownerBenefit: "2 gold"
		},
		{
			id: 21,
			name: "Jesters' Court",
			cost: 4,
			effect: "When purchased/start of round, place 2 rogues on this space.  Take all rogues from this space.",
			ownerBenefit: "1 rogue"
		},
		{
			id: 22,
			name: "New Olamn",
			cost: 8,
			effect: "Take 2 rogues and 1 wizard.",
			ownerBenefit: "1 rogue or 1 wizard"
		},
		{
			id: 23,
			name: "Northgate",
			cost: 3,
			effect: "Take 1 adventurer and 2 gold.",
			ownerBenefit: "2 points"
		},
		{
			id: 24,
			name: "The Palace of Waterdeep",
			cost: 4,
			effect: "Take the Ambassador.  At the start of the next round, you assign the Ambassador before any other player's turn.",
			ownerBenefit: "2 points"
		},
		{
			id: 25,
			name: "The Skulkway",
			cost: 4,
			effect: "Take 1 fighter, 1 rogue and 2 gold.",
			ownerBenefit: "1 fighter or 1 rogue"
		},
		{
			id: 26,
			name: "Smuggler's Dock",
			cost: 4,
			effect: "Spend 2 gold: Take (1 fighter or 1 rogue) x 4",
			ownerBenefit: "2 gold"
		},
		{
			id: 27,
			name: "Spires of the Morning",
			cost: 4,
			effect: "When purchased/start of round, place 1 cleric on this space.  Take all clerics from this space.",
			ownerBenefit: "2 points"
		},
		{
			id: 28,
			name: "The Stone House",
			cost: 4,
			effect: "Gain 1 gold for each Building tile in play.",
			ownerBenefit: "2 gold"
		},
		{
			id: 29,
			name: "The Three Pearls",
			cost: 4,
			effect: "Return 2 adventurers: Take 3 adventurers",
			ownerBenefit: "2 gold"
		},
		{
			id: 30,
			name: "The Tower of Luck",
			cost: 8,
			effect: "Take 1 cleric and 2 rogues.",
			ownerBenefit: "1 cleric or 1 rogue"
		},
		{
			id: 31,
			name: "Tower of the Order",
			cost: 4,
			effect: "When purchased/start of round, place 1 wizard on this space.  Take all wizards from this space.",
			ownerBenefit: "1 Intrigue card"
		},
		{
			id: 32,
			name: "The Waymoot",
			cost: 4,
			effect: "When purchased/start of round, place 3 points on this space.  Take and score all points on this space.  Take 1 face-up quest.",
			ownerBenefit: "2 points"
		},
		{
			id: 33,
			name: "The Yawning Portal",
			cost: 4,
			effect: "Take 2 adventurers",
			ownerBenefit: "1 adventurer"
		},
		{
			id: 34,
			name: "The Zoarstar",
			cost: 8,
			effect: "Choose a space containing an opponent's agent.  You use that space's action as though you had assigned an agent to it.",
			ownerBenefit: "2 points"
		},
		{
			id: 35,
			name: "Entry Well",
			expansion: "Undermountain",
			effect: "Take 1 face-up quest from Cliffwatch Inn, and then play an Intrigue card."
		},
		{
			id: 36,
			name: "Hall of Mirrors",
			expansion: "Undermountain",
			effect: "Take an adventurers or 1 fighter and 1 rogue from the supply, and place them in your Tavern."
		},
		{
			id: 37,
			name: "The Grim Statue",
			expansion: "Undermountain",
			effect: "Draw 2 Intrigue cards."
		},
		{
			id: 38,
			name: "Belkram's Tomb",
			expansion: "Undermountain",
			cost: 5,
			effect: "Take 5 gold.  Play an Intrigue card.",
			ownerBenefit: "2 gold"
		},
		{
			id: 39,
			name: "Citadel of the Bloody Hand",
			expansion: "Undermountain",
			cost: 7,
			effect: "Take 4 fighters.  Place a fighter from the supply on each of 2 different action spaces.",
			ownerBenefit: "2 fighters"
		},
		{
			id: 40,
			name: "Hall of Many Pillars",
			expansion: "Undermountain",
			cost: 5,
			effect: "Play 3 Intrigue cards",
			ownerBenefit: "1 Intrigue card"
		},
		{
			id: 41,
			name: "Hall of Sleeping Kings",
			expansion: "Undermountain",
			cost: 4,
			effect: "Take 1 fighter and 1 rogue.  Play an Intrigue card.",
			ownerBenefit: "1 fighter or 1 rogue"
		},
		{
			id: 42,
			name: "Hall of 3 Lords",
			expansion: "Undermountain",
			cost: 6,
			effect: "Remove 3 adventurers from your Tavern and place 1 of those adventurers on each of 3 different action spaces: 10 points",
			ownerBenefit: "2 points"
		},
		{
			id: 43,
			name: "High Duke's Tomb",
			expansion: "Undermountain",
			cost: 7,
			effect: "Take 8 gold.  Place 2 gold from the supply on each of 2 different action spaces.",
			ownerBenefit: "4 gold"
		},
		{
			id: 44,
			name: "Room of Wisdom",
			expansion: "Undermountain",
			cost: 7,
			effect: "Take 2 clerics.  Place 1 cleric from the supply on 1 action space.",
			ownerBenefit: "1 cleric"
		},
		{
			id: 45,
			name: "Shadowdusk Hold",
			expansion: "Undermountain",
			cost: 7,
			effect: "Take 4 rogues.  Place 1 rogue from the supply on each of 2 different action spaces.",
			ownerBenefit: "2 rogues"
		},
		{
			id: 46,
			name: "The Eye's Lair",
			expansion: "Undermountain",
			cost: 3,
			effect: "Take 1 adventurer.  Play 1 Intrigue card.",
			ownerBenefit: "2 points"
		},
		{
			id: 47,
			name: "The Librarium",
			expansion: "Undermountain",
			cost: 7,
			effect: "Take 2 wizards.  Place 1 wizard from the supply on 1 action space.",
			ownerBenefit: "1 wizard"
		},
		{
			id: 48,
			name: "The Lost Cavern",
			expansion: "Undermountain",
			cost: 6,
			effect: "Discard 1 non-Mandatory Quest: Take 1 fighter, 1 rogue and 1 adventurer.",
			ownerBenefit: "1 adventurer"
		},
		{
			id: 49,
			name: "Trobriand's Graveyard",
			expansion: "Undermountain",
			cost: 3,
			effect: "Take 2 Intrigue cards and 4 gold.  Discard 2 Intrigue cards.",
			ownerBenefit: "1 Intrigue card"
		},
		{
			id: 50,
			name: "Hall of the Voice",
			expansion: "Skullport",
			effect: "Draw 1 Intrigue card, and take 1 face-up Quest card from Cliffwatch Inn.  Also take 5 gold from the supply and 1 Corruption from the Corruption track, and place them in your Tavern."
		},
		{
			id: 51,
			name: "Skull Island",
			expansion: "Skullport",
			effect: "Take 2 Adventurers of any type from the supply and 1 Corruption from the Corruption tracks, and place them in your Tavern."
		},
		{
			id: 52,
			name: "Slaver's Market",
			expansion: "Skullport",
			effect: "Take 2 Fighters and 2 Rogues from the supply and 1 Corruption from the Corruption track, and place them in your Tavern."
		},
		{
			id: 53,
			name: "Cryptkey Facilitations",
			expansion: "Skullport",
			cost: 7,
			effect: "Take 3 rogues, 5 gold and 1 corruption",
			ownerBenefit: "3 gold"
		},
		{
			id: 54,
			name: "Delver's Folly",
			expansion: "Skullport",
			cost: 6,
			effect: "Remove 1 corruption from your Tavern and place that corruption on any action space.",
			ownerBenefit: "2 points"
		},
		{
			id: 55,
			name: "Monsters Made to Order",
			expansion: "Skullport",
			cost: 3,
			effect: "Take all corruption from this space.  Return 1 agent to your pool for each corruption you took.",
			ownerBenefit: "2 points"
		},
		{
			id: 56,
			name: "Promenade of the Dark Maiden",
			expansion: "Skullport",
			cost: 9,
			effect: "Remove up to 2 corruption in your Tavern from the game.",
			ownerBenefit: "3 points"
		},
		{
			id: 57,
			name: "Secret Shrine",
			expansion: "Skullport",
			cost: 8,
			effect: "Return 1 corruption: Take 1 cleric.",
			ownerBenefit: "1 cleric"
		},
		{
			id: 58,
			name: "Sharadin's Excellent Zombies",
			expansion: "Skullport",
			cost: 6,
			effect: "Take 3 fighters, 1 cleric and 1 corruption.",
			ownerBenefit: "3 gold"
		},
		{
			id: 59,
			name: "The Deepfires",
			expansion: "Skullport",
			cost: 6,
			effect: "Take 1 adventurer, 5 gold, 1 corruption and take 1 face-up quest.",
			ownerBenefit: "3 points"
		},
		{
			id: 60,
			name: "The Frontal Lobe",
			expansion: "Skullport",
			cost: 4,
			effect: "Return 1 adventurer: Take 3 wizards and 1 corruption.",
			ownerBenefit: "The returned adventurer"
		},
		{
			id: 61,
			name: "The Hell Hound's Muzzle",
			expansion: "Skullport",
			cost: 8,
			effect: "Take 1 cleric, 1 fighter, 1 rogue, 1 wizard and 1 corruption.",
			ownerBenefit: "1 adventurer"
		},
		{
			id: 62,
			name: "The Poisoned Quill",
			expansion: "Skullport",
			cost: 5,
			effect: "Return 1 corruption: Play 1 Intrigue card.",
			ownerBenefit: "3 gold"
		},
		{
			id: 63,
			name: "The Thrown Gauntlet",
			expansion: "Skullport",
			cost: 8,
			effect: "Take 3 fighters, 3 rogues, and 1 corruption.",
			ownerBenefit: "1 fighter and 1 rogue"
		},
		{
			id: 64,
			name: "Thimblewine's Pawnshop",
			expansion: "Skullport",
			cost: 7,
			effect: "Return 1 corruption: Take 1 gold.",
			ownerBenefit: "2 gold"
		}
	]
});

export default Building;
