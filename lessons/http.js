const PORT = process.env.PORT || 5000;
const App = require('../framework/App')
const userRouter = require('../src/userRouter')
const jsonParser = require('../framework/parseJson')
const app = new App()

app.use(jsonParser)
app.addRouter(userRouter)
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

