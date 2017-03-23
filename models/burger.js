var orm = require('../config/orm.js');

var burger = {
	all: function(cbFunc) {
		orm.all('burgers', function(res) {
			cbFunc(res);
		});
	}

};