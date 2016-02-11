var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = {
	srcDir: 'src',
	destDir: 'prod'
};

gulp.task('copy', function () {
	var htmlGlob = paths.srcDir + '/*.html';
	var destGlob = paths.destDir;

	gulp.src(htmlGlob)
		.pipe(gulp.dest(destGlob))
		.pipe(browserSync.reload({stream: true}));
});
