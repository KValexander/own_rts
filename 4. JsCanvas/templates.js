let units = {
	list: {
		"worker": {
			iname: "Казах",
			description: "Хороший казах всегда пригодится",
			name: "worker",
			src: "images/worker.png",
			hitPoints: 80,
			width: 16,
			height: 24,
			gridWidth: 1,
			gridHeight: 1.5,
			damage: [5, 7],
			defense: 1,
			radiuse: 10,
			speed: 1.5,
			sight: 5,
			level: 1,
			maxLevel: 1,
			experiense: 0,
			maxExperiense: 0,
			cost: {"gold": 50},
			frames: [],
		},
		"soldier": {
			iname: "Кремлебот",
			description: "Призовите толпы кремлеботов для спама своих врагов",
			name: "soldier",
			src: "images/soldier.png",
			hitPoints: 160,
			width: 20,
			height: 24,
			gridWidth: 1.25,
			gridHeight: 1.5,
			damage: [11, 15],
			defense: 3,
			radiuse: 15,
			speed: 2,
			sight: 5,
			level: 1,
			maxLevel: 3,
			experiense: 0,
			maxExperiense: 500,
			cost: {"gold": 80, "metal": 10},
			frames: [],
		},
		"meet": {
			iname: "Мясо",
			description: "Специально выращиваемые империей организмы на основе человеческих тел для самоубийственных нападений на врага. Некогда были людьми, но после прихождения в негодность стали материалом для экспериментов и переработки. Отлично держат урон, но сами его нанести почти неспособны. Лучшая защита, вы же для этого их нанимаете?"
		}
	},
	defaults: {
		type: "unit",
		animationIndex: 0,
		direction: 0,
		action: "stand",
		repulsionSpeed: 2,
		// move: false,
		selected: false,
		selectable: true,
		directions: 8,
	},
};

let buildings = {
	list: {
		"capitol": {
			iname: "Капитолий",
			description: "Здание для производства казахов и кремлеботов",
			name: "capitol",
			src: "images/capitol.png",
			hitPoints: 5000,
			cost: {"gold": 325, "tree": 120, "metal": 80},
			sight: 10,
			width: 48,
			height: 48,
			gridWidth: 3,
			gridHeight: 3,
			damage: [0, 0],
			defense: 10,
		},
	},
	default: {
		type: "unit",
		animationIndex: 0,
		direction: 0,
		action: "stand",
		selected: false,
		selectable: true,
	},
};