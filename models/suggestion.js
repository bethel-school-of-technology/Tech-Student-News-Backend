var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var SuggestionSchema = new Schema(
    {
        Topic:{type:String, required: true}
    }
);


module.exports = mongoose.model('Suggestion' , SuggestionSchema);