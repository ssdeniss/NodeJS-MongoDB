const fs = require('fs')
const path = require('path')

fs.mkdirSync(path.resolve(__dirname, `dir${Math.random()}`)) //? создание папки
fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), {recursive: true}) //? создание вложенных папок
fs.mkdir(path.resolve(__dirname, 'dir1'), (err) => { if (err) { console.log(err); return; } else { console.log('created') } }) // ? асинхронное создание папки
fs.rmdir(path.resolve(__dirname, 'dir1'), (err) => { if (err) { console.log(err); return; } else { console.log('deleted') } }) // ? асинхронное удаление папки
fs.writeFile(path.resolve(__dirname, 'test.txt'), 'test test test test', (err) => { if (err) { throw err; } else { console.log('file is writed') } }) //? создать файл с текстом переписывает текст
fs.appendFile(path.resolve(__dirname, 'test.txt'), 'test test test test', (err) => { if (err) { throw err; } else { console.log('file is writed') } }) //? создать файл с текстом добавляет текст





