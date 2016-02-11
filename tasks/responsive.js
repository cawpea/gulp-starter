var gulp = require('gulp');
var responsive = require('gulp-responsive');

var paths = {
	srcDir: 'src',
	destDir: 'prod'
};

gulp.task('responsive', function () {
	var srcGlob = paths.srcDir + '/assets/image/*.png';

	var destGlob = paths.destDir + '/assets/image/';
	var responsiveOptions = [
		{
			name: '*.png',
			width: 200,
			rename: {
				dirname: '2x'
			}
		},
		{
			name: '*.png',
			width: 400,
			rename: {
				dirname: '4x'
			}
		}
	];

	return gulp.src( srcGlob )
		.pipe( responsive( responsiveOptions ) )
		.pipe( gulp.dest( destGlob ) );
});