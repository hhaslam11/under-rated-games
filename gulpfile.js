var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var tinify = require('gulp-tinify');
var rs = require('run-sequence');
var htmlmin = require('gulp-htmlmin');
var clean_css = require('clean-css');

gulp.task('sass', function(){
	gulp.src('app/m/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/m/'));
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
	gulp.src(['app/.*'])
		.pipe(gulp.dest('dist/'));
	gulp.src(['app/m/.*'])
		.pipe(gulp.dest('dist/m/'));
	return gulp.src(['app/**/*'])
		.pipe(gulp.dest('dist/'));
});
gulp.task('cleanup', function(){
	console.log("Starting cleanup");
	del(['dist/*.scss']);
	del(['dist/m/*.scss']);
	return del(['dist/img/*.svg']);
});
gulp.task('del-dist', function(){
	return del(['dist/']);
});
gulp.task('minify', function() {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({
			collapseWhitespace: true,
			minifyJS: true
		}))
    .pipe(gulp.dest('dist'));
});
gulp.task('default', function(){
	rs('sass',
	   'build',
	   'tinify',
	   'cleanup');
});
