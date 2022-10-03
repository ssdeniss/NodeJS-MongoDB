
const fs = require('fs')
const path = require('path')

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        else {
            resolve()
        }
    }))
}
const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        else {
            resolve()
        }
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        else {
            resolve(data)
        }
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message)
        }
        else {
            resolve()
        }
    }))
}

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123 ')) //~ Записываем данные в txt  файл
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456 ')) //~ Записываем данные в txt  файл
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789')) //~ Записываем данные в txt  файл
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))//~ читаем данные с файла
    .then(data => data.split(' ').length)//~ Сколко слов
    .then(count => writeFileAsync(path.resolve(__dirname, 'counter.txt'), `Counter : ${count}`)) //~ Номер слов записываем в новый файл
    .catch(err => console.log(err))


// removeFileAsync(path.resolve(__dirname, 'test.txt')) //~ удалить файл txt  
//     .then(() => console.log('file removed'))
