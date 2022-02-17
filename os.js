const os = require("os")
const cluster = require("cluster")

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.cpus().length)

// const cpus = os.cpus()
//
// for (index = 0; index < cpus.length; index++) {
//     const CPUcore = cpus[index]
//     console.log("Запустить ещё один node js процесс")
// }
//
// console.log(process.pid)
//
// while (true) {
//
// }


// if (cluster.isMaster) {
//     for (let index = 0; index < os.cpus().length - 2; index++) {
//         cluster.fork()
//     }
//     cluster.on("exit", worker => {
//         console.log(`Воркер с pid= ${worker.process.pid} умер`)
//         cluster.fork()
//     })
// } else {
//     console.log(`Воркер с pid= ${process.pid} запущен` )
//
//     setInterval(() => {
//         console.log(`Воркер с pid= ${process.pid} всё ещё запущен`)
//     }, 5000)
// }

