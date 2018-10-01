var from = './src/css/';
var to = 'build/css'
var task = 'copy-css';

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task(task, function () {
    return gulp.src(from + '**/*', {
            base: from
        })
        .pipe(gulp.dest(to));
});

gulp.task(task + ':watch', function () {
    watch(from + '**/*', () => {
        gulp.start(task);
    });
});