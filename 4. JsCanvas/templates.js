let units = {
	list: {
		"worker": {
			iname: "Казах",
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

};