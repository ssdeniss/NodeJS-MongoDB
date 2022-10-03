const Emmiter = require('events')

const emmiter = new Emmiter()

emmiter.on('message', (data, second, third) => {
    console.log('You send a message ' + data)
    console.log('Second message ' + second)

})

const MESSAGE = process.env.message || ''

if (MESSAGE) {
    emmiter.emit('message', MESSAGE, 123)
}else{
    emmiter.emit('message', 'NO MESSAGE')
}
