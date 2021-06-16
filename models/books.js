const mongoose = require('mongoose')

await mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    publshDate: {type:Date, required:true},
    pageCount: { type: Number, required: true},
    coverImageName: {type: String, required:true},
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Author'},
    createdAt: {type: Date, required:true, default: Date.now}   
})

module.exports = mongoose.Model('Book', bookSchema)
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to Mongoose!'))