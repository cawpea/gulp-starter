import conf from '../gulpconf';
import gulp from 'gulp';

gulp.task('watch', [
		'copy',
		'image-min',
		'js-normalize',
		'css-normalize'
	],
	() => {
	var scssGlob = conf.paths.srcDir + '/**/*.scss';
	var htmlGlob = conf.paths.srcDir + '/**/*.html';
	var jsGlob = conf.paths.srcDir + '/**/*.js';
	var imageGlob = conf.paths.srcDir + '/image';

	var watchers = [];
	watchers.push( gulp.watch(htmlGlob, ['copy']) );
	watchers.push( gulp.watch(jsGlob, ['js-normalize']) );
	watchers.push( gulp.watch(scssGlob, ['css-normalize']) );

	watchers.forEach( ( watch, index ) => {
		watch.on('change', (event) => {
			console.log('WATCH: ' + event.path + ' was ' + event.type);
		});
	});
});