var gulp =require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('js',function(){
    gulp.src(['./app/js/b.js','./app/js/a.js'])
        .pipe($.concat('all.js'))//指定合并后的文件名
        .pipe(gulp.dest('./dist/js'))
});