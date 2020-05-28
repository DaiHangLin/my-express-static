## 利用express搭建简单的静态服务器

支持
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