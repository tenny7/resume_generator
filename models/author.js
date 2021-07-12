const mongoose = require('mongoose')



const Schema = mongoose.Schema;

const authorSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    firstName: {
        type : String, required : true 
    },
    lastName: {
        type: String, required : true
    },
    phone: { 
        type: String, required: true
    },
    email : {
        type:String, required: true
    },
    createdAt: {
        type: Date, default: Date.now
    }
});

module.exports = mongoose.model('Author',authorSchema );