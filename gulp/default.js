var gulp = require('gulp');
var runseq = require('run-sequence');

gulp.task('default', function() {
  runseq(
    'add-bootstrap',
    'copy-html',
    'copy-css',
    'copy-fonts',
    'copy-img',
    'copy-js',
    'sass',
    'server',
    'copy-html:watch',
    'copy-css:watch',
    'copy-fonts:watch',
    'copy-img:watch',
    'copy-js:watch',
    'sass:watch')
});