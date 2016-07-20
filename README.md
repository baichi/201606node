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

### 1.2 配置hosts文件
配置域名和IP的映射的

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
npm install mime --registry http://www.zhufengnpm.cn
```

如果需要永久修改配置
```
改为内网的源
npm config set registry "http://www.zhufengnpm.cn"
改为淘宝的源
npm config set registry "http://registry.npm.taobao.org"
```


