import conf from '../gulpconf';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import notify from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('js-min', ['js-normalize'], () => {
	var srcGlob = [
		`${conf.paths.destDir}/**/*.js`,
		`!${conf.paths.destDir}/**/*.min.js`
	];

	gulp.src( srcGlob )
		.pipe( plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}) )
		.pipe( sourcemaps.init() )
		.pipe( uglify({
			preserveComments: 'some' // ! から始まるコメントを残すオプションを追加
		}) )
		.pipe( rename({
			extname: '.min.js'
		}) )
		.pipe( sourcemaps.write('./', { sourceRoot: 'SORUCE_DIR' }) )
		.pipe( gulp.dest( conf.paths.destDir ) )
});
