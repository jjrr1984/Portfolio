var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var labelSchema = new Schema(
  {
    tag:  String,
    lang: String,
    text: String
  },
  {
    collection: 'labels'
  }
);

labelSchema.index({ tag: 1, lang: 1 },{unique:true});

var Label = mongoose.model('Label', labelSchema);

module.exports = Label;