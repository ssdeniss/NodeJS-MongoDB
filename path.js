const path = require('path')

// path.join('first', 'second') // ~ получить путь в не зависимости от ос
// const parse =  path.resolve('first', 'second') // ~ получить полный путь 
// console.log(path.parse(parse)); // ~ парсинг
// //? __dirname путь к текущей директории 
// //? .. возвр на одну папку ниже



const sisteURL = 'http://localhost:8000/user?id=5123'

const url = new URL(sisteURL)

console.log(url);