var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var tinify = require('gulp-tinify');

gulp.task('sass', function(){
	return gulp.src('app/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/'));
});
gulp.task('tinify', function() {
    gulp.src('app/img/**/*')
        .pipe(tinify('9uVaRvxkSPRGFdninata0e0bzfFRVgar'))
        .pipe(gulp.dest('/dist/img'));
});
gulp.task('build', function(){
	gulp.src(['app/**/*'])
		.pipe(gulp.dest('dist/'));
});
gulp.task('cleanup', function(){
	del(['dist/*.scss']);
	del(['dist/img/*.svg']);
});
gulp.task('default', function(){
	gulp.start('sass');
	gulp.start('build');
	gulp.start('tinify');
	gulp.start('cleanup');
});
