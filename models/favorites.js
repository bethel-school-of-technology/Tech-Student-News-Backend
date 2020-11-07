var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var Favorites = new Schema(
   {
        Category:{type:String},
        Date:{type: Date},
        Content: {type:String},
        Keywords:{type:String}
    }
   );

var FavoritesModel = mongoose.model('Favorites' , Favorites);

module.exports = FavoritesModel;
