var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillsSchema = new Schema(
	{
		groupName: String,
		groupOrder: Number,
		lang: String,
		list: [{
			item: String
		}]
	},
	{
		collection: 'skills'
	}
);

skillsSchema.index({groupOrder:1,lang:1},{unique:true});

var Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;