const mongoose = require('mongoose')

const conexao = async()=>{
    var bdlocal = await mongoose.connect('mongodb://localhost/fiap')
    //var bdatlas = await mongoose.connect('mongodb+srv://userAdmin:biel1512@cluster0.w8jhd.mongodb.net/test')
}

module.exports = conexao