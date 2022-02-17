const fs = require("fs")
const path = require("path")

// console.log("START")
//
// // fs.mkdirSync(path.resolve(__dirname, "dir", "dir2", "dir3"), {recursive: true})
// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log("Папка создана")
// })
//
// console.log("END")

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         throw err
//     }
// })

// fs.writeFile(path.resolve(__dirname, "text.txt"), "j 222 333 d", (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("Файл записан")
//     fs.appendFile(path.resolve(__dirname, "text.txt"), "ДОБАВИЛИ В КОНЕЦ", (err) => {
//         if (err) {
//             throw err
//         }
//         console.log("Файл записан")
//     })
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: "utf8"}, (err, data) => {
        if (err) {
            reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, "text.txt"), "data")
//     .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "545|"))
//     .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "tttt|"))
//     .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "222|"))
//     .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

//removeFileAsync(path.resolve(__dirname, "text.txt"))
//    .then(() => console.log("File was removed"))

const text = process.env.TEXT || "";

// writeFileAsync(path.resolve(__dirname, "text.txt"), text)
//     .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//     .then(data => data.split(" ").length)
//     .then(count => writeFileAsync(path.resolve(__dirname, "count.txt"), `Words count ${count}`))
//     .then(() => removeFileAsync(path.resolve(__dirname, "text.txt")))

