var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

var paths = {
	srcDir: 'src',
	destDir: 'prod'
};

gulp.task('imagemin', function () {
	var srcGlob = paths.srcDir + '/**/*.+(jpg|jpeg|png|gif|svg)';
	var destGlob = paths.destDir;
	var imageminOptions = {
		optimizationLevel: 7
	};

	gulp.src( srcGlob )
		.pipe(changed( destGlob ))
		.pipe(imagemin( imageminOptions ))
		.pipe(gulp.dest( destGlob ));
});