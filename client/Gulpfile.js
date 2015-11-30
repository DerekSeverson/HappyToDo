/* jshint node: true */
'use strict';

var gulp = require('gulp');
var path = require('path');
var $ = requiredGulpModules();



gulp.task('default', ['dev']);

gulp.task('dev', ['js', 'styles', 'html']);

gulp.task('js', function () {

  return gulp.src(['js/**/*.js'])
    .pipe($.concat('todo.js'))
    .pipe(gulp.dest(publicDir('js')));
});

gulp.task('styles', function () {

  return gulp.src(['style/todo.less'])
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(publicDir('style')));
});

gulp.task('html', function () {

  return gulp.src(['html/**/*.html'])
    .pipe(gulp.dest(publicDir('')));
});

gulp.task('clean', function () {

  return $.del([
    publicDir('') + '**/*.*'
  ], {
    force: true
  });
});

function publicDir(filepath) {
  return path.resolve('../server/public', filepath);
}



function requiredGulpModules() {
  return {
    concat: require('gulp-concat'),
    less: require('gulp-less'),
    minifycss: require('gulp-minify-css'),
    sourcemaps: require('gulp-sourcemaps'),
    merge2: require('merge2'),
    del: require('del'),
    newer: require('gulp-newer'),
    debug: require('gulp-debug'),
    htmlmin: require('gulp-htmlmin'),
    ngTemplates: require('gulp-ng-templates'),
    injectStringifiedHtml: require('gulp-inject-stringified-html'),
    runSequence: require('run-sequence').use(gulp)
  };
}