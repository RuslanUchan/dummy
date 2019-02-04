const dragons = [
	{ name: 'Charizard', element: 'Fire'},
	{ name: 'Garchomp', element: 'Rock'},
	{ name: 'Dragonite', element: 'Dragon'},
	{ name: 'Rayquaza', element: 'Dragon'},
]

const hasElement = (el, obj) => obj.element === el

const dragonDragons = dragons.filter(x => hasElement('Dragon', x))

console.log(dragonDragons)