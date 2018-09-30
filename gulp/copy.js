// копируем все, кроме sass

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('copy', function () {
    return gulp.src(['./src/**/*', '!src/**/sass/', '!src/**/sass/*'])
        .pipe(gulp.dest('build/'))
});

gulp.task('copy:watch', function () {
    // gulp.watch не смотрит за новыми файлами
    //gulp.watch(['./src/**/*', '!src/**/sass/', '!src/**/sass/*'], ['copy']);
    
    watch(['./src/**/*', '!src/**/sass/', '!src/**/sass/*'], () => {
        gulp.start('copy')
      })
});