setTimeout(async () => { if (/^www\.(qnly|qnlanyang)\.top/.test(window.location.hostname)){
var url = window.location.href.replace('www','ww1');
var notification = new NotificationFx({	wrapper : document.body,
message : '<span class="icon icon-megaphone"></span>\
<p>当前页面加载可能较慢，可点击切换 <a href="'+url+'">镜像源</a></p>',
layout : 'bar',	effect : 'slidetop', type : 'notice', ttl : 10000 });}
notification.show();}, 0);
