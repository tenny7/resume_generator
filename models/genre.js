import {mongoose, model} from 'mongoose'

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true},
    url: { type: String, required: true}
})

const Genre = model('Genre', GenreSchema)