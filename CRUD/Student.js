var mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb://127.0.0.1:27017/crud")

var StudentSchema = new Schema({
    Fname : String,
    Age : Number
})
var UserModel = mongoose.model("Student",StudentSchema);
module.exports =UserModel;