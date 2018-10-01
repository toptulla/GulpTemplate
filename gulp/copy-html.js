var from = './src/';
var to = './build/'
var task = 'copy-html';

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task(task, function () {
    return gulp.src(from + '**/*.html', {
            base: from
        })
        .pipe(gulp.dest(to));
});

gulp.task(task + ':watch', function () {
    watch(from + '**/*.html', () => {
        gulp.start(task);
    });
});