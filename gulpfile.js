//先从node_modules下面加载gulp模块
//然后把gulp模块加载后的返回值赋给gulp变量
var gulp = require('gulp');

//定义一个任务 task
/**
 * taskname 任务的名字
 * fn 任务的定义，函数
 */
gulp.task('hello',function(){
    console.log('hello');
});
