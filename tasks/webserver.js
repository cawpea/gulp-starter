import conf from '../gulpconf';
import gulp from 'gulp';
import webserver from 'gulp-webserver';

gulp.task('serve', () => {
	gulp.src( conf.paths.destDir )
		.pipe(webserver({
			livereload: true
		}));
});