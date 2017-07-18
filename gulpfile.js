

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

gulp.task('copy',function(){
	//从个一个文件夹拷贝到另一个文件夹
	gulp.src('src/01test.html')
		.pipe(gulp.dest('dist/'));
})

//less编译成css
gulp.task('update',function(){
	//从个一个文件夹拷贝到另一个文件夹
	gulp.watch('src/01test.html',['copy']);
	gulp.watch('src/styleless/*.less',['style']);
})

//css压缩
gulp.task('style',function(){
	gulp.src('src/styleless/*.less')
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/stylecss/'))
})


// 通过服务器同步
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


