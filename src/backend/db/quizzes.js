import { v4 as uuid } from "uuid";

export const quizzes = [
	{
		categoryName: "Harry Potter",
		_id: "4",
		questionText: "Gift to Ron by Dumbledore in Deathly hollows",
		options: [
			{ id: uuid(), text: "Cauldron", isCorrect: false },
			{ id: uuid(), text: "History of magic", isCorrect: false },
			{ id: uuid(), text: "Horcrux", isCorrect: false },
			{ id: uuid(), text: "Deluminator", isCorrect: true },
		],
		answer: "Deluminator",
	},

	{
		categoryName: "Harry Potter",
		_id: "5",
		questionText: "Color of Lily's eyes",
		options: [
			{ id: uuid(), text: "Red", isCorrect: false },
			{ id: uuid(), text: "Green", isCorrect: true },
			{ id: uuid(), text: "Blue", isCorrect: false },
			{ id: uuid(), text: "Black", isCorrect: false },
		],
		answer: "Green",
	},
	{
		categoryName: "Harry Potter",
		_id: "1",
		questionText:
			"Who was the owner of the Triangle in Deathly hallows before Harry",
		options: [
			{ id: uuid(), text: "Harry", isCorrect: false },
			{ id: uuid(), text: "James", isCorrect: true },
			{ id: uuid(), text: "Dumbledore", isCorrect: false },
			{ id: uuid(), text: "Minerva", isCorrect: false },
		],
		answer: "James",
	},

	{
		categoryName: "Harry Potter",
		_id: "2",
		questionText: "How long was Voldemort dead",
		options: [
			{ id: uuid(), text: "10 years", isCorrect: false },
			{ id: uuid(), text: "20 years", isCorrect: false },
			{ id: uuid(), text: "13 years", isCorrect: true },
			{ id: uuid(), text: "14 years", isCorrect: false },
		],
		answer: "13 years",
	},

	{
		categoryName: "Harry Potter",
		_id: "3",
		questionText: "Who defeated Dumbledore ",
		options: [
			{ id: uuid(), text: "Snape", isCorrect: false },
			{ id: uuid(), text: "Tom ", isCorrect: false },
			{ id: uuid(), text: "Grindlwald", isCorrect: true },
			{ id: uuid(), text: "Malfoy", isCorrect: false },
		],
		answer: "Grindlewald",
	},

	{
		categoryName: "web developmemt",
		_id: "1",
		questionText: "What kind of language is Javascript",
		options: [
			{ id: uuid(), text: "Dynamically typed", isCorrect: true },
			{ id: uuid(), text: "Statically typed", isCorrect: false },
			{ id: uuid(), text: "Asynchronus", isCorrect: false },
			{ id: uuid(), text: "Low level", isCorrect: false },
		],
		answer: "Dynamically typed",
	},

	{
		categoryName: "web developmemt",
		_id: "2",
		questionText: "Which data type is functional scoped",
		options: [
			{ id: uuid(), text: "let", isCorrect: false },
			{ id: uuid(), text: "var", isCorrect: true },
			{ id: uuid(), text: "const", isCorrect: false },
			{ id: uuid(), text: "bool", isCorrect: false },
		],
		answer: "var",
	},

	{
		categoryName: "web developmemt",
		_id: "3",
		questionText: "What will instantaneously update the data",
		options: [
			{ id: uuid(), text: "useRef", isCorrect: true },
			{ id: uuid(), text: "useState", isCorrect: false },
			{ id: uuid(), text: "useReducer", isCorrect: false },
			{ id: uuid(), text: "Redux", isCorrect: false },
		],
		answer: "useRef",
	},

	{
		categoryName: "Quantum Mechanics",
		_id: "1",
		questionText:
			"Radiation and matter have properties of both particle and of waves id called",
		options: [
			{ id: uuid(), text: "Entanglement", isCorrect: false },
			{ id: uuid(), text: "Wave-particle duality", isCorrect: true },
			{ id: uuid(), text: "Superposition", isCorrect: false },
			{
				id: uuid(),
				text: "Emission",
				isCorrect: false,
			},
		],
		answer: "Wave-particle duality",
	},

	{
		categoryName: "Quantum Mechanics",
		_id: "2",
		questionText:
			"Entangled particles seperated by space and time takes how long to show changes occured in other ",
		options: [
			{ id: uuid(), text: "1 microsecond", isCorrect: false },
			{ id: uuid(), text: "1 nanosecond", isCorrect: false },
			{ id: uuid(), text: "1 light second", isCorrect: false },
			{ id: uuid(), text: "Instantaneously", isCorrect: true },
		],
		answer: "Instantaneously",
	},

	{
		categoryName: "Quantum Mechanics",
		_id: "3",
		questionText: "What cannot be measured simultaneously of a particle",
		options: [
			{ id: uuid(), text: "Size and speed", isCorrect: false },
			{ id: uuid(), text: "Position and momentum", isCorrect: true },
			{ id: uuid(), text: "Spin and Color", isCorrect: false },
			{ id: uuid(), text: "Energy and Torque", isCorrect: false },
		],
		answer: "Position and momentum",
	},

	{
		categoryName: "astronomy",
		_id: "1",
		questionText: "Name of first manned spacecraft?",
		options: [
			{ id: uuid(), text: "Apollo 1", isCorrect: false },
			{ id: uuid(), text: "Orion 3", isCorrect: false },
			{ id: uuid(), text: "Saturn V", isCorrect: false },
			{ id: uuid(), text: "Vostok 1", isCorrect: true },
		],
		answer: "Vostok 1",
	},

	{
		categoryName: "astronomy",
		_id: "2",
		questionText: "About how many light years across is the Milky-way?",
		options: [
			{ id: uuid(), text: "100,000", isCorrect: true },
			{ id: uuid(), text: "10,000", isCorrect: false },
			{ id: uuid(), text: "100", isCorrect: false },
			{ id: uuid(), text: "1", isCorrect: false },
		],
		answer: "100,000",
	},
	{
		categoryName: "astronomy",
		_id: "3",
		questionText: "Number of moons of Mars",
		options: [
			{ id: uuid(), text: "2", isCorrect: true },
			{ id: uuid(), text: "1", isCorrect: false },
			{ id: uuid(), text: "3", isCorrect: false },
			{ id: uuid(), text: "4", isCorrect: false },
		],
		answer: "Graphite",
	},

	{
		categoryName: "astronomy",
		_id: "4",
		questionText: "Name of latest telescope launched in space",
		options: [
			{ id: uuid(), text: "Hubble", isCorrect: false },
			{ id: uuid(), text: "James Webb ", isCorrect: true },
			{ id: uuid(), text: "Plato", isCorrect: false },
			{ id: uuid(), text: "Gravity Waves", isCorrect: false },
		],
		answer: "James Webb",
	},
];
