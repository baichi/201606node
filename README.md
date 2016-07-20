## 1. 配置环境 
### 1.1 课件的位置
教程的位置
```
https://zhufengnodejs.github.io/doc/html/%E6%A1%86%E6%9E%B6%E5%92%8C%E5%BA%93/gulp.html
```

代码位置
```
https://github.com/zhufengnodejs/201606node
```

### 1.2 配置hosts文件(如果在学校内网中的话要改，在线同学不需要)
配置域名和IP的映射的
如果是win8或win10,hosts文件不能直接修改
需要先拷贝到桌面上，然后用记事本修改，
改完后拷贝回去，如果提示是否覆盖，则选择是
windows
```
c:\windows\system32\drivers\etc\HOSTS
```

mac
```
/etc/hosts
```

如果提示开发使用记事本打开
```
192.168.1.114 www.zhufengschool.cn
192.168.1.114 www.zhufengftp.cn
192.168.1.114 www.zhufengnpm.cn
```

网盘
```
www.zhufengftp.cn
```

下载npm包
```
www.zhufengnpm.cn
```

通过内网下载npm包
```
npm install mime --registry http://registry.npm.taobao.org
```

如果需要永久修改配置
```
改为淘宝的源
npm config set registry "http://registry.npm.taobao.org"
```


## 2. 安装
全局安装
```
npm install gulp -g
```
本地安装
先创建目录，目录名称一定不能叫**gulp**
```
$ mkdir learngulp
$ cd learngulp
$ npm init -y
//一定要先初始化项目(npm init -y)后才能去本地安装gulp
$ npm install gulp --save-dev
```

## 3. 配置环境变量
```
先去查看全局变量
E:\201606node>npm root -g
C:\Users\Administrator\AppData\Roaming\npm\node_modules
然后把此目录配置到path中去
C:\Users\Administrator\AppData\Roaming\npm
```

## 4. 定义任务并执行
新建一个gulpfile.js文件
在此文件中新建一个任务
```
gulp.task('hello',function(){
     console.log('hello');
});

```

