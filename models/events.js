var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema(
    {
        NameOfEvent:{type: String, required:true, maxlength: 100},
        Date: {type: Date, required: true}
    }
);


module.exports = mongoose.model('Event' , 'EventSchema');