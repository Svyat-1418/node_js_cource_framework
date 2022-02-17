const PORT = process.env.PORT || 5000
const Application = require("./framework/Application")
const userRouter = require("./src/user-router")
const jsonParser = require("./framework/parsejson")
const parseUrl = require("./framework/parseUrl")
const mongoose = require("mongoose")

const app = new Application()

app.addRouter(userRouter)

app.use(jsonParser)
app.use(parseUrl("http://localhost:5000"))

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://user:555@cluster0.2kcz1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start()
















//

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-type": "application/json"
//     })
//     if (req.url === "/users") {
//         return res.end(JSON.stringify([
//             {id: 1, name: "Igor"}]))
//     }
//     if (req.url === "/posts") {
//         return res.end("POSTS")
//     }
//     res.end(req.url)
// })