var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema(
    {
        Category:{type:string,required: true, maxlength: 100},
        Date:{type: Date, required: true},
        Content: {type: string, required: true},
        Keywords: {type:string},

    }
);


module.exports = mongoose.model('Article' , 'ArticleSchema');