const path = require("path")
// path- модуль, позволяющий работать с абсолютными/относительными путями
//
// path.join позволяет склеить участки пути
// console.log("Cклеить участки пути", path.join("first", "second"))

// две глобальные переменные: __dirname, __filename
// __dirname содержит путь к текущей директории
// console.log("Cклеить участки пути", path.join(__dirname, "first"))
// console.log("Cклеить участки пути", path.join(__dirname, ".."))

// __filename содержит путь к текущему файлу
// console.log("Cклеить участки пути", path.join(__filename, "second"))
// console.log("Cклеить участки пути", path.join(__filename, "..", "..", ".."))

// path.resolve() всегда возвращает абсолютнвй путь
// console.log("Получить абсолютнвй путь", path.resolve("first", "second", "third"))

// console.log("Получить абсолютнвй путь", path.resolve("/first", "/second", "/third"))
// console.log("Получить абсолютнвй путь", path.resolve("/first", "second", "third"))
// console.log("Получить абсолютнвй путь", path.resolve(__dirname, "/first", "second", "third"))

// console.log("Cклеить участки пути", path.join(__dirname, "..", ".."))
// const fullpath = path.resolve("first", "second", "third.js")
// console.log("Парсинг пути", path.parse(fullpath))
// console.log("Проверка на абсолютнвй путь", path.isAbsolute(fullpath))
// console.log("Разделитель в ОС", path.sep)
// console.log("Название файло", path.basename(fullpath))
// console.log("Расширение файло", path.extname(fullpath))

//==============================================

const siteURL = "http://localhost:8080/users?id=5123"

//Глобально доступный класс 'URL' помогает правильно распарсить URL-адрес

const url = new URL(siteURL)

console.log(url)
