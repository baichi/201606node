/*
* gulp-minify-css-> minify-css
*/
function replace(str){
    return str.replace(/-([a-z])/g,function(matched,group1){
        return group1.toUpperCase();
    });
}

console.log(replace('minify-css'));