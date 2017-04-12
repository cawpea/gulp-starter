import conf from '../gulpconf';
import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import cache from 'gulp-cached';
import browserSync from 'browser-sync';

gulp.task('sass', function(){
	var srcGlob = conf.paths.srcDir + '/assets/scss/*.scss';
	var destGlob = conf.paths.destDir + '/assets/css';

	return gulp.src(srcGlob)
		.pipe(cache( 'sass' ))
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(sass())
		.pipe(gulp.dest(destGlob))
		.pipe(browserSync.reload({stream: true}));
});
