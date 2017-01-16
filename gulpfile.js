var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('sass', function(){
	return gulp.src('app/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/'));
});

gulp.task('build', function(){
	gulp.src(['app/**/*'])
		.pipe(gulp.dest('dist/'));
});
gulp.task('cleanup', function(){
	del(['dist/*.scss']);
});
gulp.task('default', function(){
	gulp.start('sass');
	gulp.start('build');
	gulp.start('cleanup');
});
