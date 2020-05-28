## 利用express搭建简单的静态服务器

### 目的
+ 工作中经常有多台设备，需要共享文件的需求，解决方案有很多种
  + windows下的共享文件夹，这个其实已经很给力，比如可以把某个项目debug的目录直接共享给其他用户，这样其他用户有需要就可以在其他设备上直接运行的程序，或者拷贝文件
  + windows和mac下共享文件夹，这里没有尝试用windows的共享文件夹方案，但是有其他的解决方案，比如这里express搭简单的静态服务器

### 支持
+ 浏览
+ 下载

上代码

~~~js
app.use('/public', express.static(__dirname + '/public'));
app.use('/public2', serveStatic(__dirname + '/public'), serveIndex(__dirname + '/public', {
  'icons': true,
  'view': 'details',
}));

~~~