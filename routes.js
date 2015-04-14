module.exports = function(app){

	/*
		@description: Labels service
		@param lang: the language of the labels
	*/
    app.get('/db/labels/:lang',function(req,res){
    	var lang = req.params.lang;
    	var labelsModel = require('./models/labels');
    	labelsModel.find({'lang':lang},'-_id -lang',function (err, labels) {
			if(err){
				res.status(500);
				res.send("Error in database query");
			}else{
				res.send(labels);
			}
		});
	});

    /*
		@description: Skills service
		@param lang: the language of the skills records
	*/
	app.get('/db/skills/:lang',function(req,res){
    	var lang = req.params.lang;
    	var skillsModel = require('./models/skills');
    	skillsModel.find({'lang':lang},'-_id -lang',{'sort': {'groupOrder': 1}},function (err, skills) {
			if(err){
				res.status(500);
				res.send("Error in database query");
			}else{
				res.send(skills);
			}
		});
	});

	/*
		@description: Experience service
		@param lang: the language of the experience records
	*/
	app.get('/db/experience/:lang',function(req,res){
    	var lang = req.params.lang;
    	var experienceModel = require('./models/experience');
    	experienceModel.find({'lang':lang},'-_id -lang',{'sort': {'companyOrder': 1}},function (err, records) {
			if(err){
				res.status(500);
				res.send("Error in database query");
			}else{
				res.send(records);
			}
		});
	});

	/*
		@description: the root service
	*/
	app.get('*',function(req,res){
		res.sendFile(__dirname + '/views/index.min.html');
	});
};