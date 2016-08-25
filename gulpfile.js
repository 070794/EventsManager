var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
   gulp.src('./src/SCSS/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./src/CSSfile/'))
});

//Watch task
gulp.task('default',function() {
   gulp.watch('src/SCSS/**/*.scss',['styles']);
});