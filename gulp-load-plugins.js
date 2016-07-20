/**
 * 1.扫描package.json中的依赖项
 * 2.找到所有以gulp-开头的模块
 * 3.通过require加载这些模块，把返回值赋给$的属性
 * 4.属性名就等于模块名去掉gulp-前缀
 * gulp-minify-css -> minifyCss
 * -> minify-css
 */
function replace(str){
    return str.replace(/-([a-z])/g,function(matched,group1){
        return group1.toUpperCase();
    });
}
module.exports = function(){
   var $ = {};
    // package.json => pkg
   var pkg = require('./package.json');//加载到package.json得到JSON对象
   var dev = pkg.devDependencies;
   for(var attr in dev){
       if(attr.startsWith('gulp-') && attr != 'gulp-load-plugins'){
           $[replace(attr.slice(5))] =  require(attr);
       }
   }
   return $;
}

module.exports();