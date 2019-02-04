const dragon = (name, size, element) => `${name} is a ${size} that breathes ${element}!`

let charizard = dragon('Charizard', 'Huge', 'Fire')

console.log(charizard)

// Currying
const pokemon = 
	name =>
		size =>
			element =>
				`${name} is a ${size} pokemon that has ${element} affinity!`

const dragonite = pokemon('Dragonite')('Huge')('Dragon')

console.log(dragonite)