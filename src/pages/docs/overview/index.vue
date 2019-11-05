<template>
  <div class="overview">
    <h2 id="What-Socket.IO-is">Socket.IO是什么</h2>
    <p>Socket是一个能在客户端和服务端之间，进行实时，双向，基于事件通信的库。有下面部分组成：</p>
    <ul>
      <li>
        Node.js服务端的库: <a href="https://github.com/socketio/socket.io">源</a> | <a href="https://socket.io/docs/server-api/">API</a>
      </li>
      <li>
        客户端的Javascript的库(特可以运行在Nodejs上): <a href="https://github.com/socketio/socket.io-client">源</a> | <a href="https://socket.io/docs/client-api/">API</a>
      </li>
    </ul>
    <p>主要的特点是：</p>
    <h3 id="Reliability">可靠</h3>
    <p>即使在下面这些情况下，也可以建立连接:</p>
    <ul>
      <li>代理和负载均衡</li>
      <li>个人防火墙和杀毒软件</li>
    </ul>
    <p>基于此，它依赖于<a href="https://github.com/socketio/engine.io">Engine.IO</a>, 它第一次建立一个长轮询的链接，然后升级更好的传输方式，像处于测试阶段的WebSocket。更多信息请查看<a href="https://github.com/socketio/engine.io#goals">目标</a>章节</p>
    <h3 id="Auto-reconnection-support">自动重连</h3>
    <p>除非已经确认退出， 否则断连的客户端将一直尝试重新链接，知道服务器可以再次建立连接。查看可用的重连参数<a href="https://socket.io/docs/client-api/#new-Manager-url-options">在这儿</a></p>
    <h3 id="Disconnection-detection">断开检测</h3>
    <p>Engine.IO上一个令人激动的实现是，允许服务端和客户端知晓对方不反馈的情况。</p>
    <p>该功能是通过在服务端和客户端上设置计时器来实现的，在链接的握手中分享超时值(包括pinginterval, pingTimeout两个参数)。当使用多节点时，会有粘性会话要求，这些定时器会要求后续的客户端发送请求到相同的服务器上。</p>
    <h3 id="Binary-support">二进制支持</h3>
    <p>任何序列化的数据都可以传输：</p>
    <ul>
      <li>客户端的<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a>和<a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">Blob</a></li>
      <li>在Nodejs端的<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a>和<a href="https://nodejs.org/api/buffer.html">Buffer</a></li>
    </ul>
    <h3 id="Multiplexing-support">支持复用</h3>
    <p>为了在你的应用中创建关注点分离(例如每个模块，或基于权限),Socket.IO允许你创建多个<a href="https://socket.io/docs/rooms-and-namespaces/#Namespaces">命名空间</a>, 共享相同的链接，表现出多个分离的通信频道。</p>
    <h3 id="Room-support">房间支持</h3>
    <p>对于每个<a href="https://socket.io/docs/rooms-and-namespaces/#Namespaces">命名空间</a>,你可以定义任意频道，称为<a href="https://socket.io/docs/rooms-and-namespaces/#Rooms">房间</a>,可以让sockets加入和离开。你可以广播到任何房间，到达每个已经加入频道的socket。</p>
    <p>这是一个有用的特点，可以发送通知给一组用户，或者一个连接了多个设备的指定用户。</p>
    <p>这些特点有一个简单，方便的API，像下面这样：</p>
    <pre class="code">
      io.on('connection', function(socket){
        socket.emit('request', /* */); // emit an event to the socket
        io.emit('broadcast', /* */); // emit an event to all connected sockets
        socket.on('reply', function(){ /* */ }); // listen to the event
      });</pre>

    <h2 id="What-Socket.IO-is-not">Socket.IO不是什么</h2>
    <p></p>
  
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
  .overview {

  }
</style>