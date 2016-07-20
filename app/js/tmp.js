var gulp =require('gulp');
/**
 * 所有的css
 * 所有的png
 * 所有的除tmp.js以外的JS文件
 */
gulp.task('copy',function(){
    gulp.src(['./app/*/*.css'
        ,'./app/imgs/**/*.png'
        ,'./app/js/*.js'
        ,'!./app/js/tmp.js'])
        .pipe(gulp.dest('./dist'))
});

gulp.task('default',['copy']);