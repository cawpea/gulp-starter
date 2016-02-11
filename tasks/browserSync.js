var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = {
	srcDir: 'src',
	destDir: 'prod'
};

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: paths.destDir
		},
		ghostMode: {
			location: true
		}
	});
});
