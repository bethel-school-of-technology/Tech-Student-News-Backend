var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema(
    {

    }
);


module.exports = mongoose.model('Article' , 'ArticleSchema');