var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var Projects = new Schema(
   {
        Category:{type:String},
        Date:{type: Date},
        Content: {type:String},
        Keywords:{type:String}
    }
   );

var ProjectsModel = mongoose.model('Projects' , Projects);

module.exports = ProjectsModel;
