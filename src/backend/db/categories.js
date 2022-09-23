import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		name: "Harry Potter",
		image: "assets/harryPotter.png",
	},

	{
		_id: uuid(),
		name: "Astronomy",
		image: "assets/astronomy.png",
	},

	{
		_id: uuid(),
		name: "Quantum Mechanics",
		image: "assets/quantumMechanics.png",
	},

	{
		_id: uuid(),
		name: "Web Developmemt",
		image: "assets/web.png",
	},
];
