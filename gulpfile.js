var path = require('path');
var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var vinylSource = require('vinyl-source-stream');
var browserify = require('browserify');
var requireDir = require('require-dir');
var dir = requireDir('./tasks', {recurse: true});
var wait = require('gulp-wait');
var webserver = require('gulp-webserver');

var paths = {
	srcDir: 'src',
	destDir: 'prod'
};

gulp.task('serve', function () {
	gulp.src( paths.destDir )
		.pipe(webserver({
			livereload: true
		}));
});

gulp.task('copy:tmp', function () {
	var srcGlob = paths.destDir + '/**/*';
	var destGlob = 'tmp';

	return gulp.src( srcGlob )
		.pipe( gulp.dest( destGlob ) );
});

gulp.task('del', ['copy:tmp'], function () {
	var srcGlob = 'tmp';
	var delay = 5000;

	gulp.src( srcGlob )
		.pipe( wait( delay ) )
		.pipe( vinylPaths( del ) );
});

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

gulp.task('buildjs', function () {
	browserify({
		entries: [ paths.srcDir + '/assets/js/partial.js']
	})
	.bundle()
	.pipe( vinylSource( 'bundle.js' ) )
	.pipe( gulp.dest( paths.destDir + '/assets/js') );
});

gulp.task('default', ['buildjs', 'watch', 'browser-sync']);