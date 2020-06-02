'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');

const sources = ['templates/**/*.scss'];

gulp.task('styles', () => {
  return gulp.src(sources)
      .pipe(sourcemaps.init())
      .pipe(sass({
      // includePaths: [path.resolve(__dirname, "../src/bower_components")]
      }))
      .on('error', notify.onError({title: 'styles'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('templates/'));
});

gulp.task('styles:watch', () => {
  return gulp.watch(sources, gulp.series(['styles']));
});

gulp.task('default', gulp.series(['styles']));
