/* jshint node: true */
'use strict';

var gulp = require('gulp');
var Path = require('path');
var _ = require('lodash');
var $ = requiredGulpModules();


var src = getSourceDirectories();


gulp.task('default', ['dev']);

gulp.task('dev', ['js', 'styles', 'html']);

gulp.task('js', function () {

  return gulp.src(jsSources())
    .pipe($.concat('todo.js'))
    .pipe(gulp.dest(publicDirectory('js')));
});

gulp.task('styles', function () {

  return gulp.src('style/todo.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(publicDirectory('style')));
});

gulp.task('html', function () {

  return gulp.src('html/index.html')
    .pipe(gulp.dest(publicDirectory('')));
});

gulp.task('clean', function () {

  return $.del([
    publicDirectory('') + '**/*.*'
  ], {
    force: true
  });
});


function jsSources() {

  return _.flatten([
    [
      // Vendor Source
      'angular/angular.min.js',
      'angular-bootstrap/ui-bootstrap.min.js',
      'angular-bootstrap/ui-bootstrap-tpls.mins.js',
      'angular-ui-router/release/angular-ui-router.min.js',
      'ngprogress-lite/ngprogress-lite.min.js',
      'ui-select/dist/select.min.js',
      'ng-file-upload/ng-file-upload-all.min.js',
      'moment/min/moment.min.js',
      'numeraljs/min/numeral.min.js',
      'lodash/lodash.min.js'

    ].map(bower),
    [
      // Our Source
      'js/**/app.js',
      'js/**/module.js',
      'js/**/*.js'
    ]
  ]);
}

function bower(filepath) {
  return Path.join(src.bower, filepath);
}

function getSourceDirectories() {
  return {
    bower: 'bower_components',
    html: 'html',
    js: 'js',
    style: 'style'
  };
}

function publicDirectory(filepath) {
  return Path.resolve('../server/public', filepath);
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