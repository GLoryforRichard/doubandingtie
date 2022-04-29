// ==UserScript==
// @name         豆瓣顶帖中控台（自顶）
// @version      0.1
// @author       mRobot
// @match        https://accounts.douban.com/passport/setting
// @description  用于豆瓣顶贴
// ==/UserScript==

(function() {
    console.log('start');
    var STR='0'; //一个暗号
    var RELOAD_TIME=1*60*1000;//每1分钟刷新
    var UP_TIME=20*1000;//每10秒打开一个帖子进行顶帖
    console.log('start2');
    var eles=['265758606'];
    var n=0;
    function openTopic(href){
        console.log('打开~~'+href);
        window.open(href, "_self");
    }
    for(var i=0;i<eles.length;i=i+1){
        var tr=eles[i];
        var href="https://www.douban.com/group/topic/"+tr+"/?start="+STR;
        console.log("时间"+n*UP_TIME+"，地址："+href);
        setTimeout(openTopic,n*UP_TIME,href);
        n=n+1;

    }
    setTimeout(function(){window.location.reload()},RELOAD_TIME);

})();
