var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
    return gulp.src('dn-button.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dn-button.min.js');
});

gulp.task('default', ['minify']);