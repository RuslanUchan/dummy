const famAtHome = ['Abi', 'Umi', 'Syifa', 'Me']

const isAtHome = (fam) => famAtHome.includes(fam) ? `${fam} at home` : `${fam} isnt home`

const whoIsAtHome = famAtHome.map(isAtHome)

console.log(isAtHome('Syamil'))