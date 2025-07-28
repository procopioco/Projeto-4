const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}

exports.default = styles;
exports.styles = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.series('styles'));
}