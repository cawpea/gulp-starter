var gulp = require('gulp');
var changed = require('gulp-changed');
var filelog = require('gulp-filelog');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');

var IMAGE_RESIZE = {};
IMAGE_RESIZE.getPath = function ( destDir ) {
	var paths = {
		srcDir: 'src',
		destDir: 'prod',
		uploadsDir: '/assets/image'
	};
	return {
		baseDir: paths.srcDir + paths.uploadsDir + '/origin',
		srcGlob: paths.srcDir + paths.uploadsDir + '/origin/**/*.+(jpg|jpeg|png|gif)',
		destGlob: paths.destDir + paths.uploadsDir + destDir
	};
};

gulp.task('image-optim',
	[
		'image-optim:origin',
		'image-optim:thumb',
		'image-optim:thumb-2x',
		'image-optim:middle'
	]
);

gulp.task('image-optim:origin', function () {
	var paths = IMAGE_RESIZE.getPath('/origin');

	var imageminOptions = {
		optimizationLevel: 7
	};

	return gulp.src( paths.srcGlob, {base: paths.baseDir} )
		.pipe( changed( paths.destGlob ) )
		.pipe( imagemin( imageminOptions ) )
		.pipe( gulp.dest( paths.destGlob ) )
		.pipe( filelog() );
});

gulp.task('image-optim:middle', function () {
	var paths = IMAGE_RESIZE.getPath('/middle');

	var resizeOptions = {
		width: 960,
		upscale: false,
		imageMagick: true
	};

	var imageminOptions = {
		optimizationLevel: 7
	};

	return gulp.src( paths.srcGlob, { base: paths.baseDir } )
		.pipe( changed( paths.destGlob ) )
		.pipe( imageResize( resizeOptions ) )
		.pipe( imagemin( imageminOptions ) )
		.pipe( gulp.dest( paths.destGlob ) )
		.pipe( filelog() );
});

gulp.task('image-optim:thumb-2x', function () {
	var paths = IMAGE_RESIZE.getPath('/thumb-2x');

	var resizeOptions = {
		width: 400,
		height: 400,
		gravity: 'Center',
		crop: true,
		upscale: false,
		imageMagick: true
	};

	var imageminOptions = {
		optimizationLevel: 7
	};

	return gulp.src( paths.srcGlob, {base: paths.baseDir} )
		.pipe( changed( paths.destGlob ) )
		.pipe( imageResize( resizeOptions ) )
		.pipe( imagemin( imageminOptions ) )
		.pipe( gulp.dest( paths.destGlob ) )
		.pipe( filelog() );
});

gulp.task('image-optim:thumb', function () {
	var paths = IMAGE_RESIZE.getPath('/thumb');

	var resizeOptions = {
		width: 200,
		height: 200,
		gravity: 'Center',
		crop: true,
		upscale: false,
		imageMagick: true
	};

	var imageminOptions = {
		optimizationLevel: 7
	};

	return gulp.src( paths.srcGlob, {base: paths.baseDir} )
		.pipe( changed( paths.destGlob ) )
		.pipe( imageResize( resizeOptions ) )
		.pipe( imagemin( imageminOptions ) )
		.pipe( gulp.dest( paths.destGlob ) )
		.pipe( filelog() );
});