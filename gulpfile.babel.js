import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

requireDir('./tasks', {recurse: true});
gulp.task('default', ['watch', 'browser-sync']);

gulp.task('build', () => {
  runSequence(
    'copy',
    'iconfont',
    'image-min',
    'css-normalize',
    'css-min',
    'js-normalize',
    'js-min'
  )
});