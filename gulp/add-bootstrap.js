var gulp = require('gulp');
var config = require('../package.json').config;

gulp.task('add-bootstrap', () => {
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./src/js/jquery/'));

    gulp.src('./node_modules/popper.js/dist/umd/popper.min.js')
        .pipe(gulp.dest('./src/js/popper.js/'));

    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./src/js/bootstrap/'));

    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./src/css/bootstrap/'));

    gulp.src('./node_modules/bootstrap/dist/css/bootstrap-grid.min.css')
        .pipe(gulp.dest('./src/css/bootstrap/'));
});