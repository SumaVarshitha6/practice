var mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb+srv://cluster0.dwpzg3b.mongodb.net/?retryWrites=true&w=majority",{user:'sumavarshitha216',pass:'Chandhini6'})

var CustomerSchema = new Schema({
    name : String,
    age : Number
})
var UserModel = mongoose.model("Customer",CustomerSchema);
module.exports =UserModel;
