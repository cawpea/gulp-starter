'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//! This is common.js
var Sample = function () {
	function Sample() {
		_classCallCheck(this, Sample);

		this.message = 'called Sample Class';
	}

	_createClass(Sample, [{
		key: 'call',
		value: function call() {
			console.log(this.message);
		}
	}]);

	return Sample;
}();

var Common = function Common() {
	this.init();
};
Common.prototype = {
	init: function init() {
		console.log('init common');
	}
};

(function () {
	new Common();
	new Sample().call();
})();