//! This is common.js
class Sample {
	constructor() {
		this.message = 'called Sample Class';
	}
	call() {
		console.log( this.message );
	}
}

var Common = function() {
	this.init();
};
Common.prototype = {
	init: function() {
		console.log('init common');
	}
};

(function() {
	new Common();
	new Sample().call();
}());