const Router = require('../framework/Router')
const router = new Router()

const users = [
    { id: 1, name: 'Denis', age: 21 },
    { id: 2, name: 'Ion', age: 17 },
    { id: 3, name: 'Andrei', age: 13 },
    { id: 4, name: 'George', age: 32 },
]

router.get('/users', (req, res) => {
    res.send(users)
})
router.post('/users', (req, res) => {
    console.log(req.body)
    const user = req.body
    users.push(user)
    res.send(user)
})

module.exports = router