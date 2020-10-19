var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema(
    {

    }
);


module.exports = mongoose.model('Event' , 'EventSchema');