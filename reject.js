const yearOfExperience = [5, 3, 1, 19, 21, 5, 17, 10, 5]

const isExperienced = (el) => el >= 10

const experienced = yearOfExperience.filter(isExperienced)
// const unexperienced = yearOfExperience.reject(isExperienced)

console.log(`Experienced: ${experienced}`)
