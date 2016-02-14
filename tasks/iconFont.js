var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);

var paths = {
	srcDir: 'src/assets/icons',
	destDir: 'prod/assets/fonts'
};

gulp.task('icon-font', function () {
	var srcGlob = paths.srcDir + '/*.svg';
	var iconFontOptions = {
		fontName: 'myfont',
		appendUnicode: true,
		formats: ['ttf', 'eof', 'woff'],
		timestamp: runTimestamp
	};

	var handlerGlyphs = function ( glyphs, options ) {
		console.log( glyphs, options );
	};

	return gulp.src( srcGlob )
		.pipe( iconfont( iconFontOptions ) )
		.on('glyphs', handlerGlyphs )
		.pipe( gulp.dest( paths.destDir ) );
});