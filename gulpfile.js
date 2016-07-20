//先从node_modules下面加载gulp模块
//然后把gulp模块加载后的返回值赋给gulp变量
var gulp = require('gulp');

gulp.task('买米饭',function(){
    console.log('买米饭');
});
gulp.task('买鸡蛋',function(){
    console.log('买鸡蛋');
});
gulp.task('做饭',['买米饭','买鸡蛋'],function(){
    console.log('炒蛋炒饭');
});

gulp.task('吃饭',['做饭'],function(){
    console.log('开吃');
});
