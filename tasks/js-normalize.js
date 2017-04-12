import conf from '../gulpconf';
import gulp from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

gulp.task('js-normalize', () => {
	var srcGlob = [
		`${conf.paths.srcDir}/**/*.js`,
		`!${conf.paths.srcDir}/**/*.min.js`
	];

	return gulp.src( srcGlob )
		.pipe( plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}) )
		.pipe( babel() )
		.pipe( gulp.dest( conf.paths.destDir ) )
});
