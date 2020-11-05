var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var Event = new Schema(
    {
        NameOfEvent:{type: String,},
        Date: {type: Date,}
    }
);


var EventModel = mongoose.model('Event' , Event);

module.exports = EventModel;