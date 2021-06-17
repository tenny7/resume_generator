const mongoose = require('mongoose')

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    title: { 
        type   : String, required: false
    },
    description: { 
        type: String, required: false
    },
    publshDate: { 
        type:Date, required:false
    },
    pageCount: { 
        type: Number, required: false
    },
    coverImageName: { 
        type: String, required:false
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

