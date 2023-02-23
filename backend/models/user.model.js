 const Mongoose = require('mongoose')

 // todo: add firstName, lastName, address, city, gender, isAdmin
 const userSchema = new Mongoose.Schema({
     email: {
         type: String
     },
     password: {
         type: String
     }
 })

 const UserModel = Mongoose.model('users', userSchema)

 module.exports = UserModel