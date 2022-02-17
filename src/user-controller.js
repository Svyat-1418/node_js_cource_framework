const User = require("./user-model")

const getUsers = async (req, res) => {
    let users;
    if (req.params.id) {
        users = await User.findByIdAndDelete(req.params.id)
    } else {
        users = await User.find()
    }
    res.send(users)
}

const createUser = async    (req, res) => {
    console.log(req.body)
    const user = await User.create(req.body)
    res.send(user)
}

module.exports = {
    getUsers,
    createUser
}