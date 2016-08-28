var gulp=require('gulp');
var sass=require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


gulp.task('minify', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/CSSfile'));
});


gulp.task('sass',function(){
	return gulp.src('./src/SCSS/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/CSSfile'));
});

gulp.task('default',['sass','watch','minify']);

gulp.task('watch',function()
{
	gulp.watch('./src/SCSS/**/*.scss',['sass']);
});