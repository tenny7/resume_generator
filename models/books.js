const mongoose = require('mongoose')

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// _id: mongoose.Types.ObjectId,
const bookSchema = new Schema({
    title: { 
        type   : String, required: false
    },
    description: { 
        type: String, required: false
    },
    publshedDate: { 
        type: String, required:false
    },
    pages: { 
        type: Number, required: false
    },
    bookcover: { 
        type: String, required:false
    },
    item : {
        type: String, required:true
    },
    createdAt: {
        type: Date, required:false, default: Date.now
    }   
})

module.exports = mongoose.model('Book', bookSchema)


// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to Mongoose!'))


// author: { 
//     type: mongoose.Schema.Types.ObjectId,
//     required: false, 
//     ref: 'Author'
// },

