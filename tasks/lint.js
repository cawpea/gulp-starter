import gulp from 'gulp';
import conf from '../gulpconf';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
  return gulp.src([
    conf.paths.srcDir + '/**/*.js'
  ])
  .pipe( eslint() )
  .pipe( eslint.format() )
  .pipe( eslint.failAfterError() );
});