var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema(
    {
        Category:{type:String, required: true, maxlength: 100},
        Date:{type: Date, required: true},
        Content: {type: String, required: true},
        Keywords: {type:String},

    }
);


module.export = mongoose.model('Article' , ArticleSchema);
