var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expSchema = new Schema(
	{
		companyName:  String,
		lang: String,
		companyOrder: Number,
		startDate: String,
		endDate: String,
		jobTitle: String,
		location: String,
		duties: [{
			item: String
		}],
		projects: [{
			item: String,
			link: String
		}],
		companyLogo: String,
		website: String
	},
	{
		collection: 'experience'
	}
);

expSchema.index({ companyOrder: 1, lang: 1 },{unique:true});

var Experience = mongoose.model('Experience', expSchema);

module.exports = Experience;