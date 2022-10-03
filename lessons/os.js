const os = require('os')
const cluster = require('cluster')

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus())

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork() //~ запускаем процессы для каждого ядра пк
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker with pid = ${worker.process.pid} died`) //~ Процесс умер
        cluster.fork() //~ Процесс заменён 
    })
} else {
    console.log(`work with pid =  ${process.pid} started`)

    setInterval(() => {
        console.log(`work with pid =  ${process.pid}`)
    }, 5000)
}