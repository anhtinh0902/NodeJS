var db = require('mongoose')
db.connect('mongodb://localhost/qlhh')

var hanghoaSchema = db.Schema({
    tensp: String, gia: Number, hinhanh: String
}, { versionKey: false }
)
var hanghoa = db.model('hanghoa', hanghoaSchema)
module.exports = hanghoa
