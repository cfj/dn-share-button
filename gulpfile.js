var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('minify', function() {
    return gulp.src('dn-button.js')
    .pipe(uglify())
    .pipe(rename('dn-button.min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['minify']);