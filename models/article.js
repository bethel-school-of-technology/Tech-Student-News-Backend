var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var Article = new Schema(
   {
        Category:{type:String},
        Date:{type: Date},
        Content: {type:String},
        Keywords:{type:String}
    }
   );

var ArticleModel = mongoose.model('Article' , Article);

module.exports = ArticleModel;
