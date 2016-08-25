var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('sass',function(){
	return gulp.src('./src/SCSS/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/CSSfile'));
});

gulp.task('default',['sass','watch']);

gulp.task('watch',function()
{
	gulp.watch('./src/SCSS/**/*.scss',['sass']);
});