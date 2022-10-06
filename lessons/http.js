const PORT = process.env.PORT || 5000;
const App = require('../framework/App')
const userRouter = require('../src/userRouter')
const jsonParser = require('../framework/parseJson')
const parseUrl = require('../framework/parseUrl')
const mongoose = require('mongoose')
const app = new App()

app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://denis:12092001@cluster0.jd9phw0.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {

    }
}

start()