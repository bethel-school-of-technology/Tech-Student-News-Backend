var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var Suggestion = new Schema(
    {
        Topic:{type:String,}
    }
);


var SuggestionModel = mongoose.model('Suggestion' , Suggestion);

module.exports = SuggestionModel;