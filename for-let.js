const hobbies = ['Philosophy', 'Business', 'Design', 'Computer Science', 'Programming', 'Psychology', 'Physics', 'Mathematics']

const identity = {
	name: 'Uchan',
	age: 21,
	hobbies: hobbies
}

for(let hobby of hobbies) {
	console.log(hobby)
}

for(let prop in identity) {
	console.log(prop, identity[prop])
}