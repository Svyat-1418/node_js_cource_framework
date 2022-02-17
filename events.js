const Emmitter = require("events")

const emmitter = new Emmitter()

// Создаём своё пользовательское событие с помощью .on()
emmitter.on("message", (data, second, third) => {
    console.log(`Вы прислали событие ${data}`)
    console.log(`Второй аргумент ${second}`)
})

const MESSAGE = process.env.message || ""

// Если сообщение не пустое то мы будем генерировать событие
if (MESSAGE) {
    emmitter.emit("message", MESSAGE, 123)
} else {
    emmitter.emit("message", "Вы не указали сообщение")
}

// Когда удобно использовать?
// - При создании http серверов
// - Когда нужно сгенерировать какое-то событие на какое-то определённое действие
// - В WebSocket-ах
// - В WebSocket-ах
// - long pulling
// - clusters