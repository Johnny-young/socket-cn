<template>
  <div class="chat">
    <my-header></my-header>
    <my-menu></my-menu>
    <div class="content">
      <p>这篇指导我们将创建一个基本的聊天应用。几乎不需要关于Nodejs或Socket.IO的基本知识，所以对各个层次的学习者来说都非常不错！</p>
      <h2 id="Introduction">介绍</h2>
      <p>使用传统的流行的服务端框架像LAMP(PHP)写一个聊天应用是比较难的。它包括了轮询服务器的内容变化，时间戳的持续追踪以及有点慢的</p>
      <p>传统上，大多数的实时聊天系统的架构是用Sockets作为解决方案，提供客户端、服务端双向的通信通道。</p>
      <p>这意味着服务器可以推送消息到客户端上。当你输入聊天的信息时，服务端将获取到信息并推送到所有连接着的客户端。</p>

      <h2 id="The-web-framework">web框架</h2>
      <p>目标是先创建一个简单的HTML页面，包含发送表单和一列表的信息。我们将使用前端的Nodejs框架<code>express</code>。确保<a href="https://nodejs.org/">Node.JS</a>已经安装了。</p>
      <p>首先创建一个描述我们项目的<code>package.json</code>的清单文件。推荐将文件放置在一个空的文件夹下(文件名可以叫<code>chat-example</code>)</p>
      <pre class="code">
        {
          "name": "socket-chat-example",
          "version": "0.0.1",
          "description": "my first socket.io app",
          "dependencies": {}
        }</pre>
      <p>现在，为了给<code>dependencies</code>添加我们想要的东西时，我们使用<code>npm install --save</code></p>
      <pre class="code">
        npm install --save express@4.15.2</pre>
      <p>现在我们安装了express，接着我们创建一个<code>index.js</code>文件，来创建我们的应用</p>
      <pre class="code">
       var app = require('express')();
        var http = require('http').createServer(app);

        app.get('/', function(req, res){
          res.send(&lt;h1&gt;Hello world&lt;/h1&gt;);
        });

        http.listen(3000, function(){
          console.log('listening on *:3000');
        });</pre>
      <p>下面解释：</p>
      <ul>
        <li>
          Express初始化<code>app</code>为一个函数句柄，用于提供一个HTTP服务器(显示在第二行)
        </li>
        <li>
          定义路由句柄<code>/</code>，当我们访问网站时获取请求
        </li>
        <li>让htpp服务器监听3000端口</li>
      </ul>
      <p>如果你运行<code>node index.js</code>， 你应该会看到下面的样子</p>
      <p>
        <img src="https://socket.io/images/chat-1.png" alt="">
      </p>
      <p>如果你打开浏览器并访问<code>http://localhost:3000</code>:</p>
      <p>
        <img src="https://socket.io/images/chat-2.png" alt="">
      </p>
      <h2 id="Serving-HTML">发送HTML页面</h2>
      <p>目前为止，在<code>index.js</code>页面里，我们通过调用<code>res.send</code>方法，传送HTML字符串。如果将镇而过应用的HTML都放进这儿，将会让人感到困惑。相反，我们创建一个<code>index.html</code>文件。</p>
      <p>使用<code>sendFile</code>方法来重构我们的路由:</p>
      <pre class="code">
      app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
      });</pre>
      <p>接着，<code>index.html</code>中输入下面的内容:</p>
      <pre class="code">
        &lt;!doctype html&gt;
        &lt;html&gt;
           &lt;head&gt;
             &lt;title>Socket.IO chat&lt;/title&gt;
             &lt;style&gt;
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font: 13px Helvetica, Arial; }
              form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
              form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
              form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
              #messages { list-style-type: none; margin: 0; padding: 0; }
              #messages li { padding: 5px 10px; }
              #messages li:nth-child(odd) { background: #eee; }
            &lt;style&gt;
           &lt;/head&gt;
           &lt;body&gt;
             &lt;ul id="messages"&gt;&lt;/ul&gt;
             &lt;form action=""&gt;
               &lt;input id="m" autocomplete="off" /&gt;&lt;button&gt;Send&lt;/button&gt;
             &lt;/form&gt;
           &lt;/body&gt;
         &lt;/html&gt;</pre>
      <p>如果你重启进程(Control+C ,接着再次执行<code>node index</code>), 刷新页面。它将展示下面的样子:</p>
      <p>
        <img src="https://socket.io/images/chat-3.png" alt="">
      </p>

      <h2 id="Integrating-Socket.IO">整合Socket.IO</h2>
      <p>Socket.IO是有下面两部分组成的:</p>
      <ul>
        <li>整合(或挂在)在Node.JS HTTP服务器上的库: <a href="https://github.com/socketio/socket.io">socket.io</a></li>
        <li>加载到浏览器上的客户端的库: <a href="https://github.com/socketio/socket.io-client">socket.io-client</a></li>
      </ul>
      <p>开发中，<code>socket.io</code>自动的为我们自动的服务于客户端，目前为止，我们只安装了一个模块:</p>
      <pre class="code">npm install --save socket.io</pre>
      <p>这将安装模块，并且添加依赖到<code>package.json</code>文件中。现在我们来编辑<code>index.js</code>文件，添加内容:</p>
      <pre class="code">
        var app = require('express')();
        var http = require('http').createServer(app);
        var io = require('socket.io')(http);

        app.get('/', function(req, res){
          res.sendFile(__dirname + '/index.html');
        });

        io.on('connection', function(socket){
          console.log('a user connected');
        });

        http.listen(3000, function(){
          console.log('listening on *:3000');
        });</pre>
      <p>注意：我们通过传入一个<code>http</code>(HTTP服务器)对象来初始化一个<code>socket.io</code>的实例。然后我们监听来自sockets的<code>connection</code>连接事件,并打印到控制台上：</p>
      <p>现在，在index.html页面里，我们在<code>&lt;/body&gt;</code>前添加下面的代码片段:</p>
      <pre class="code">
        &lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
        &lt;script&gt;
          var socket = io();
        &lt;/script&gt;</pre>
      <p>这段代码的意思是：先加载<code>socket.io-client</code>库，暴露一个全局的<code>io</code>对象，然后连接。</p>
      <p>如果你喜欢客户端本地的JS文件，你可以在<code>node_modules/socket.io-client/dist/socket.io.js</code>里找到。</p>
      <p>注意，当我们调用<code>io()</code>时，没有指定URL加载库，因为它会试着连接托管页面的主机。</p>
      <p>若果你现在重启服务器，控制台上将会打印出"a user connected"。</p>
      <p>试着打开多个tab页面，你将看到多调消息：</p>
      <p>
        <img src="https://socket.io/images/chat-4.png" alt="">
      </p>
      <p>每一个socket也会触发<code>disconnect</code>事件:</p>
      <pre class="code">
        io.on('connection', function(socket){
          console.log('a user connected');
          socket.on('disconnect', function(){
            console.log('user disconnected');
          });
        });</pre>
      <p>接着，你刷新一个tab页面多次，你将看到下面的情况:</p>
      <p>
        <img src="https://socket.io/images/chat-5.png" alt="">
      </p>

      <h2 id="Emitting-events">触发事件</h2>
      <p>在Socket.IO的背后主要想法是让你能够收发任何你想要的事件，携带任何你想携带的数据。任意能够变成JSON的对象都可以，二进制数据也支持。</p>
      <p>开始做吧，用户输入信息，服务器接收到信息作为一个<coded>chat message</coded>事件。在<code>index.html</code>中的<code>脚本</code>盘点段，应该像下面这样:</p>
      <pre class="code">
        &lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
        &lt;script src="https://code.jquery.com/jquery-1.11.1.js"&gt;&lt;/script&gt;
        &lt;script&gt;
          $(function () {
            var socket = io();
            $('form').submit(function(e){
              e.preventDefault(); // prevents page reloading
              socket.emit('chat message', $('#m').val());
              $('#m').val('');
              return false;
            });
          });
        &lt;/script&gt;</pre>
      <p>在<code>index.js</code>中，我们打印<code>chat message</code>事件：</p>
      <pre class="code">
        io.on('connection', function(socket){
          socket.on('chat message', function(msg){
            console.log('message: ' + msg);
          });
        });</pre>
      <p>结果应该像下面视频一样：</p>
      <video autoplay="" loop="" width="100%"><source src="https://i.cloudup.com/transcoded/zboNrGSsai.mp4"></video>

      <h2 id="Broadcasting">广播</h2>
      <p>对我们来说，下一个目标是从服务端发送事件到剩余的用户端。</p>
      <p>为了发送一个事件给所有人，Socket.IO提供给我们<code>io.emit</code>的函数方法：</p>
      <pre class="code">io.emit('some event', { for: 'everyone' });</pre>
      <p>如果你想发送给所有人除了某个特定的socket，我们可以使用<code>broadcast</code>标识：</p>
      <pre class="code">io.on('connection', function(socket){
        socket.broadcast.emit('hi');
      });</pre>
      <p>这个例子中，为了简便，我们发送给所有人，包括发送者自己：</p>
      <pre class="code">io.on('connection', function(socket){
        socket.on('chat message', function(msg){
          io.emit('chat message', msg);
        });
      });</pre>
      <p>同时，在客户端，我捕捉<code>chat message</code>事件。客户端的所有Javascript代码在下面:</p>
      <pre class="code">
        &lt;script&gt;
          $(function () {
            var socket = io();
            $('form').submit(function(e){
              e.preventDefault(); // prevents page reloading
              socket.emit('chat message', $('#m').val());
              $('#m').val('');
              return false;
            });
            socket.on('chat message', function(msg){
              $('#messages').append($('&lt;li&gt;').text(msg));
            });
          });
        &lt;/script&gt;</pre>
      <p>这样就完成了我们的应用开发，总共20行代码！就想下面一样：</p>
      <video autoplay="" loop="" width="100%"><source src="https://i.cloudup.com/transcoded/J4xwRU9DRn.mp4"></video>

      <h2 id="Homework">家庭作业</h2>
      <p>下面有些改进应用的建议:</p>
      <ul>
        <li>当一个用户登录或退出时，广播给所有连接的用户。</li>
        <li>添加外号的功能支持。</li>
        <li>不要发送信息给发送者自己。相反的，及时的将用户的输入添加到输入的内容后。</li>
        <li>添加"{user} is typing"的功能提示。</li>
        <li>显示谁在线。</li>
        <li>添加私人信息。</li>
        <li>分享你的改进。</li>
      </ul>

      <h2 id="Getting-this-example">获取这个案例</h2>
      <p>你可以在Github上找到<a href="https://github.com/socketio/chat-example">这个案例</a></p>
      <pre class="code">git clone https://github.com/socketio/chat-example.git</pre>

      <p>发现错误？可以在<a href="https://github.com/socketio/socket.io-website/blob/master/source/get-started/chat.md">Github</a>上编辑</p>
    </div>
  </div>
</template>

<script lang="ts">
  import header from '@/src/components/header'
  import menu from "@/src/components/menu"

  export default {
    name: "chat",
    components: {
      'my-header': header,
      "my-menu": menu
    }
  }
</script>

<style lang="scss" scoped>
  .chat {
    margin-left: 320px;
    margin-right: 240px;

    p {
      margin: 16px 0;
      
      font-size: 16px;
    }

    h2 {
      margin-top: 30px;
      line-height: 1.6;
      font-size: 26px;
    }

    .code {
      margin: 0 -20px;
      padding: 15px 20px;
      line-height: 22px;
      color: #ccc;
      border: 1px solid #ddd;
      background-color: #2d2d2d;
      overflow: auto;
    }

    code {
      margin: 0 5px;
      padding: 0 5px;
      background-color: #eee;
      text-shadow: 0 1px #fff;
    }

    ul {
      padding-left: 40px;

      li {
        margin-top: 10px;
      }
    }

    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }
</style>