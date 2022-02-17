// Readable - чтение
// Writable - запись
// Duplex - чтение и запись
// Transform - такой же как Duplex, но может изменять данные по мере чтения

const fs = require("fs")
const path = require("path")

// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, "test2.txt"))
//
// // Один чанк по дефолту = 64кб
// stream.on("data", (chunk => {
//     console.log(chunk)
// }))

// stream.on("open", () => console.log("Начади читать"))
// stream.on("end", () => console.log("Закончили читать"))
// stream.on("error", (error) => console.log(error))

// const writableStream = fs.createWriteStream(path.resolve(__dirname, "test2.txt"))
// for (let index = 0; index < 20; index++) {
//     writableStream.write(index + "\n")
// }
// // write stream нужно завершать вручную
// writableStream.end()

const http = require("http")

http.createServer((req, res) => {
    // req - readable stream
    // res - writable stream
    const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"))

    //stream.on("data", chunk => res.write(chunk))
    //stream.on("end", chunk => res.end(chunk))

    // При сетевом подключении стрим может закончить читатать раньше прежде чем
    // пользователь скачает. Чтобы стрим закрылся только после того как пользователь
    // скачает, используем pipe(). Говоря по простому позволяет достичь синхронизации
    // между readable/writable streams. Т.е readable stream не начинает читать новую
    // порцию данных пока writable stream не закончил записыывать предыдущую.
})

