'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../package.json').config;
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var watch = require('gulp-watch');

gulp.task('sass', function () {
  return gulp.src(config.src.sass + '/**/*.{scss,sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest(config.build.css))
});

gulp.task('sass:watch', function () {
  // gulp.watch не смотрит за новыми файлами
  //gulp.watch(config.src.sass + '/**/*.{scss,sass}', ['sass']);

  watch(config.src.sass + '/**/*.{scss,sass}', () => {
    gulp.start('sass')
  })
});