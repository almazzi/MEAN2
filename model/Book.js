/**
 * Created by Almaz on 11.03.2015.
 */
var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
    name:String,
        author:String,
    publisher:String,
    published:String,
    genre:String

});
module.exports = mongoose.model('Book', BookSchema);