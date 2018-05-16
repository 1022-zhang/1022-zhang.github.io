<!--崩溃欺骗-->
var OriginTitile = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' (ｷ｀ﾟДﾟ´)!!页面崩溃啦 ~ ';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = 'ε = = (づ′▽`)づ  噫又好了~ ' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;}, 2000);
     }
 });