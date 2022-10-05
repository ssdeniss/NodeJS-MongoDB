module.exports = (req, res) => {
    res.writeHead(200, {
        'Content-tupe': 'application/json'
    })
    res.send = (data) => {
        res.end(JSON.stringify(data))
    }
}