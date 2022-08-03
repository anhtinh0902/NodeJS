var db = require('mongoose')
var bcrypt = require('bcrypt')

db.connect('mongodb://localhost/qlhh')
var userSchema = db.Schema({
    username: String, password: String
}, { versionKey: false })

userSchema.pre('save', function(next) {
    var user = this
    bcrypt.hash(user.password, 10, function(err, encrypted) {
        user.password = encrypted
        next()
    })
})

var user = db.model('user', userSchema)
module.exports = user
