const gulp = require("gulp");
const concatCss = require("gulp-concat-css");
const babel = require("gulp-babel");

function gulpConcatCss() {
  return gulp
    .src("lib/**/*.css")
    .pipe(concatCss("index.css"))
    .pipe(gulp.dest("lib/"));
}

function gulpJs() {
  return gulp
    .src("src/**/style/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("lib/"));
}

exports.default = gulp.series(gulpConcatCss, gulpJs);
