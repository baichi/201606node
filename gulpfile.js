//先从node_modules下面加载gulp模块
//然后把gulp模块加载后的返回值赋给gulp变量
var gulp = require('gulp');

//定义一个任务 task
/**
 * taskname 任务的名字
 * fn 任务的定义，函数
 */
gulp.task('copy',function(){
    /**
     * 先从源文件中读取源文件
     * 然后再通过pipe方法以管道的方式导出到目标目录中
     */
    gulp.src('./app/index.html')//获取要输入的方法
        .pipe(gulp.dest('./dist'));//指定要保存的目录
});


