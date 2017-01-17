var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var tinify = require('gulp-tinify');
var rs = require('run-sequence');

gulp.task('sass', function(){
	return gulp.src('app/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/'));
	console.log("Finished compiling SASS");
});
gulp.task('tinify', function() {
    return gulp.src('app/img/**/*')
        .pipe(tinify('9uVaRvxkSPRGFdninata0e0bzfFRVgar'))
        .pipe(gulp.dest('/dist/img'));
});
gulp.task('build', function(){
	return gulp.src(['app/**/*'])
		.pipe(gulp.dest('dist/'));
});
gulp.task('cleanup', function(){
	console.log("Starting cleanup");
	del(['dist/*.scss']);
	return del(['dist/img/*.svg']);
});
gulp.task('del-dist', function(){
	return del(['dist/']);
});
gulp.task('default', function(){
	rs('sass',
	   'build',
	   'tinify',
	   'cleanup');
});
