var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema(
    {
>>>>>>> HEAD
        Category:{type:String, required: true, maxlength: 100},
=======
        Category:{type:String, required: true, maxlength: 100},
>>>>>>> 07f8f12f479a3888098cf76689167518b10f1702
        Date:{type: Date, required: true},
        Content: {type:String, required: true},
        Keywords: {type:String},

    }
);


module.export = mongoose.model('Article' , ArticleSchema);
