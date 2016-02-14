var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var runTimestamp = Math.round(Date.now()/1000);

var paths = {
	srcDir: 'src/assets/icons',
	destDir: 'prod/assets/css',
	fontDir: 'prod/assets/fonts'
};

gulp.task('iconfont', function () {
	var srcGlob = paths.srcDir + '/*.svg';
	var iconFontOptions = {
		fontName: 'myfont',
		appendUnicode: true,
		formats: ['ttf', 'eof', 'woff', 'svg'],
		timestamp: runTimestamp
	};
	var imageminOptions = {
		optimizationLevel: 7
	};

	var handlerGlyphs = function ( glyphs, options ) {
		var templatePath = paths.srcDir + '/docs';
		var cssFileName = 'myfont';
		var engine = 'lodash';
		var consolidateOptions = {
			glyphs: glyphs,
			fontName: 'myfont',
			fontPath: '/assets/fonts/',
			className: 'icon',
			cssFileName: cssFileName
		};
		gulp.src( templatePath + '/template.css')
			.pipe( consolidate( engine, consolidateOptions ) )
			.pipe( rename( {basename: cssFileName} ) )
			.pipe( gulp.dest( paths.fontDir + '/css' ) )
			.pipe( gulp.dest( paths.destDir ) );

		gulp.src( templatePath + '/template.html')
			.pipe( consolidate( engine, consolidateOptions ) )
			.pipe( rename( {basename: cssFileName} ) )
			.pipe( gulp.dest( paths.fontDir ) );

		console.log( glyphs, options );
	};

	return gulp.src( srcGlob )
		.pipe( iconfont( iconFontOptions ) )
		.on('glyphs', handlerGlyphs )
		.pipe( imagemin( imageminOptions ) )
		.pipe( gulp.dest( paths.fontDir ) );
});