const http = require('http')
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
    res.end('Server work')
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))