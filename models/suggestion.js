var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var SuggestionSchema = new Schema(
    {

    }
);


module.exports = mongoose.model('Suggestion' , 'SuggestionSchema');