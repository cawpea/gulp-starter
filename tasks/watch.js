var gulp = require('gulp');

var paths = {
	srcDir: 'src',
	destDir: 'prod'
};

gulp.task('watch', ['sass', 'copy', 'imagemin'], function () {
	var scssGlob = paths.srcDir + '/**/*.scss';
	var htmlGlob = paths.srcDir + '/*.html';

	var watchers = [];
	watchers.push( gulp.watch(scssGlob, ['sass']) );
	watchers.push( gulp.watch(htmlGlob, ['copy']) );

	watchers.forEach(function ( watch, index ) {
		watch.on('change', function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
	});
});