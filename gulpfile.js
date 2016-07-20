var gulp =require('gulp');
var $ = require('gulp-load-plugins')();
/**
 * 监控app下index.html文件的变化
 * 变化之后自拷贝到dist目录并自动刷新浏览器
 */
gulp.task('copy',function(){
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe($.connect.reload());
});
gulp.task('watch',function(){
    gulp.watch('./app/index.html',['copy']);
});

gulp.task('server',function(){
    $.connect.server({
        port:9090,//指定端口号
        root:'./dist',
        livereload:true //支持动态重刷新
    });
});
gulp.task('default',['server','watch']);