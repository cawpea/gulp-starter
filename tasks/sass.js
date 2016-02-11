var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var cache = require('gulp-cached');
var browserSync = require('browser-sync');

var paths = {
	srcDir: 'src',
	destDir: 'prod'
};

gulp.task('sass', function(){
	var srcGlob = paths.srcDir + '/assets/scss/*.scss';
	var destGlob = paths.destDir + '/assets/css';

	gulp.src(srcGlob)
		.pipe(cache( 'sass' ))
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
    	.pipe(sass())
    	.pipe(gulp.dest(destGlob))
    	.pipe(browserSync.reload({stream: true}));
});
