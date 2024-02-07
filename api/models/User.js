const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: String,
    email: {typr:String, unique:true},
    password: String,
})

const Usermodel = mongoose.model('user', UserSchema);

module.exports = UserModel;