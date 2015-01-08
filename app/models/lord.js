import DS from 'ember-data';

var Lord = DS.Model.extend({
	name: DS.attr("string"),
	expansion: DS.attr("string", { defaultValue: "Base" }),
	perk: DS.attr("string")
});

Lord.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Brianne Byndraeth",
			perk: "At the end of the game, you score 4 for each Arcana Quest and each Skullduggery Quest you completed."
		},
		{
			id: 2,
			name: "Caladorn Cassalanter",
			perk: "At the end of the game, you score 4 for each Skullduggery Quest and each Warfare Quest you completed."
		},
		{
			id: 3,
			name: "Durnan the Wanderer",
			perk: "At the end of the game, you score 4 for each Commerce Quest and each Warfare Quest you completed."
		},
		{
			id: 4,
			name: "Khelben Arunsun, The Blackstaff",
			perk: "At the end of the game, you score 4 for each Arcana Quest and each Skullduggery Quest you completed."
		},
		{
			id: 5,
			name: "Kyriani Agrivar",
			perk: "At the end of the game, you score 4 for each Arcana Quest and each Piety Quest you completed."
		},
		{
			id: 6,
			name: "Larissa Neathal",
			perk: "At the end of the game, you score 6 for each Building you control."
		},
		{
			id: 7,
			name: "Mirt the Moneylender",
			perk: "At the end of the game, you score 4 for each Commerce Quest and each Piety Quest you completed."
		},
		{
			id: 8,
			name: "Nindil Jalbuck",
			perk: "At the end of the game, you score 4 for each Piety Quest and each Skullduggery Quest you completed."
		},
		{
			id: 9,
			name: "Nymara Scheiron",
			perk: "At the end of the game, you score 4 for each Commerce Quest and each Skullduggery Quest you completed."
		},
		{
			id: 10,
			name: "Piergeiron the Paladinson",
			perk: "At the end of the game, you score 4 for each Piety Quest and each Warfare Quest you completed."
		},
		{
			id: 11,
			name: "Sammereza Sulphontis",
			perk: "At the end of the game, you score 4 for each Arcana Quest and each Commerce Quest you completed."
		},
		{
			id: 12,
			name: "Danilo Thann",
			expansion: "Undermountain",
			perk: "At the end of the game, you score 3 for each non-Mandatory Quest you completed."
		},
		{
			id: 13,
			name: "Halaster Blackcloak",
			expansion: "Undermountain",
			perk: "At the end of the game, you score 4 for each non-Mandatory Undermountain Quest you completed and each Undermountain Building you control."
		},
		{
			id: 14,
			name: "Trobriand",
			expansion: "Undermountain",
			perk: "At the end of the game, you score 5 for each Quest you completed worth at least 10."
		},
		{
			id: 15,
			name: "Irusyl Eraneth",
			expansion: "Skullport",
			perk: "At the end of the game, choose 1 Quest type.  You score 6 for Quest you completed of the chosen type."
		},
		{
			id: 16,
			name: "Sangalor",
			expansion: "Skullport",
			perk: "At the end of the game, you score 4 for each non-Mandatory Undermountain Quest you completed and each Undermountain Building you control."
		},
		{
			id: 18,
			name: "The Xanathar",
			expansion: "Skullport",
			perk: "At the end of the game, you score 4 for each Corruption in your Tavern."
		}
	]
});

export default Lord;
