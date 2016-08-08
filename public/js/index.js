/**
 * Created by Administrator on 2016/6/6.
 */
//$(".tcdPageCode").createPage({
//    pageCount:27,
//    current:1,
//    backFn:function(p){
//        console.log(p);
//    }
//});

$(window).load(function(){


    $(".top").click(function(){

        $("html,body").animate({scrollTop:"0px"},200);

    });

    setTimeout(function(){
        //alert(1)
    },1000)









    $('.wf-main').masonry({
        itemSelector: '.wf-cld',
        gutterWidth: 20,
        columnWidth: 320,
        isFitWidth: true
    });
    //var x=0;
    $('.wf-main').infinitescroll({
        navSelector: "#navigation", //导航的选择器，会被隐藏
        nextSelector: "#navigation a", //包含下一页链接的选择器
        itemSelector: ".wf-cld", //你将要取回的选项(内容块)
        debug: true, //启用调试信息
        //maxPage: 2, //最大的页数，也就是滚动多少次停。这个页码必须得要你从数据库里面拿
        animate: true, //当有新数据加载进来的时候，页面是否有动画效果，默认没有
        extraScrollPx:150, //滚动条距离底部多少像素的时候开始加载，默认150
        bufferPx: 40, //载入信息的显示时间，时间越大，载入信息显示时间越短
        errorCallback: function() {
            alert('没有新数据了...');
        }, //当出错的时候，比如404页面的时候执行的函数
        localMode: true, //是否允许载入具有相同函数的页面，默认为false
        dataType: 'html',//可以是json
//                template: function(data) {
//                    //data表示服务端返回的json格式数据，这里需要把data转换成瀑布流块的html格式，然后返回给回到函数
//                    return '';
//                },
        loading: {
            msgText: "加载中...",
            finishedMsg: '没有新数据了...',
            selector: '.loading' // 显示loading信息的div
        }
    }, function(newElems) {
        //程序执行完的回调函数

        var $newElems = $(newElems);
        $('.wf-main').masonry('appended', $newElems);
        //newElems表示返回的数据，如 果是json的话就是template的返回值

        //x=x+1;
        //console.log(x)
        //if(x>=5){
        //    alert(1)
        //
        //}

    });


    $(".top").mouseenter(function(){
        $(this).find("img").eq(0).hide()
        $(this).find("img").eq(1).show()
    });
    $(".top").mouseleave(function(){
        $(this).find("img").eq(1).hide()
        $(this).find("img").eq(0).show()
    });









    $(".no-border").mouseenter(function(){
        $(this).find(".bo").css("opacity","1")
        $(this).find(".bo").css("filter","progid:DXImageTransform.Microsoft.Alpha(opacity=100)")

    });
    $(".no-border").mouseleave(function(){

        $(this).find(".bo").css("opacity","0.5")
        $(this).find(".bo").css("filter","progid:DXImageTransform.Microsoft.Alpha(opacity=50)")

    });

})