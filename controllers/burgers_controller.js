var express = require('express');

var router = express.Router();

// Import burger model
var burger = require('../models/burger.js');

// Routes
router.get('/', function(req, res) {
	burger.all(function(data) {
		var hbsObject = { 
			burger: data
		};
		console.log(hbsObject);
		// Render index.handlebars and pass is object to use
		res.render("index", hbsObject);
	});
});