var connection = require('./connection.js');

// Question marks for sql values
function printQuestionsMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	};

	return arr.toStirng();
};

// Get column names in SQL table
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + "=" + ob[key]);
		};
	};

	return arr.toString();
};

// ORM
var orm = {
	all: function()
}