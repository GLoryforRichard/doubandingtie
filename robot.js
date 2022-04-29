// ==UserScript==
// @name         豆瓣顶帖机器人（自顶）
// @version      0.1
// @author       mRobot
// @match        https://www.douban.com/group/topic/*
// @description  用于豆瓣顶贴
// ==/UserScript==

(function() {
    var STR='0';
    //随机序列
    var lst=[" 好好好",
             "海姆我",
             " 亚达哟",
             " 欧西给",
             "不好不好"];
    var ding=true;
    if(!window.location.href.endsWith(STR)){
        ding=false;
    }
    if(ding){
        var comment="";
        num=Math.floor(Math.random()*lst.length);
        comment=lst[num];
        var cmt=document.getElementById('last');
        var num=Math.floor(Math.random()*lst.length);
        cmt.innerText=comment;
        var sbm=document.getElementsByName('submit_btn')[0];
        sbm.click();
        console.log('发射~~~');
    }
    else{
        console.log('沉睡~~~');
    }
    setTimeout(function(){window.open("https://accounts.douban.com/passport/setting", "_self");},60*1000);//30秒后返回
})();
