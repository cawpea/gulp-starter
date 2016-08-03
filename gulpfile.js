var path = require('path');
var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./tasks', {recurse: true});

gulp.task('default', ['watch', 'browser-sync']);