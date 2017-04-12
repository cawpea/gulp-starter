import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./tasks', {recurse: true});
gulp.task('default', ['watch', 'browser-sync']);