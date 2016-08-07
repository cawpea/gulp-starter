class Common {
	constructor() {
		this.init();
	}
	init() {
		console.log('init common');
	}
}

(function() {
	new Common();
}());