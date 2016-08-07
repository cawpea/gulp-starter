//! This is common.js
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
}());