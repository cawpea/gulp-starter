const conf = require('../gulpconf');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');

gulp.task('css-normalize', () => {
	var srcGlob = conf.paths.destDir + '/**/*.css';
	var destGlob = conf.paths.destDir;

	return runSequence('sass', () => {
		return gulp.src( srcGlob )
			.pipe( autoprefixer({
				browsers: ['last 5 versions'],
				cascade: false
			}) )
			.pipe( gulp.dest( destGlob ) );
		}) 
});