const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('dexter/**/*.scss')
          .pipe(sass())
          .pipe(dest('css'))
}

function watchSass() {
  watch(['dexter/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchSass);