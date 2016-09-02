/**
 * Created by Administrator on 2016/7/7.
 */








$(window).load(function(){

    $(".goto-comment").click(function(){
        var height=$("body").height()
        $('html, body').animate({scrollTop: height}, 300);
    })


    $("#likes-count").hover(function(){
        $(".tooltip.fade").addClass("in")
    },function(){
        $(".tooltip.fade").removeClass("in")
    })


})























$(function(){


    $(".follow").click(function(){

        if($(this).hasClass("following")){
            $(this).removeClass("following").addClass("btn-success")
            $(this).find("span").html("添加关注")
            $(this).find("i").removeClass("fa-check").addClass("fa-plus")


            var author=$(this).find("#attention").attr("data-user-slug")

            $.ajax({
                type: "post",
                url:"remove_attention",
                dataType: "json",
                data:{"author":author}
            })
        }else{
            $(this).addClass("following").removeClass("btn-success")
            $(this).find("span").html("正在关注")
            $(this).find("i").removeClass("fa-plus").addClass("fa-check")

            var author=$(this).find("#attention").attr("data-user-slug")

            $.ajax({
                type: "post",
                url:"add_attention",
                dataType: "json",
                data:{"author":author}
            })

        }
    })





















































    /* 鼠标滚动事件
     * */
    var scrollFunc=function(e){
        var direct=0;
        e=e || window.event;
        var article_header=$(".article_header")

        if(e.wheelDelta){//IE/Opera/Chrome
            if(e.wheelDelta>0){
                article_header.removeClass("hide-wrap-btn")
            }else{
                article_header.addClass("hide-wrap-btn")
            }
        }else if(e.detail){//Firefox
            t2.value=e.detail;
        }
    }
    /*注册事件*/
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }//W3C
    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
    //$(".one-notebook").click(function(){
    //    $(this).addClass("active").siblings($(this)).removeClass("active")
    //    var notebook_name=$(".one-notebook.active").find($(".word")).html()
    //    var notebook_id=$(".one-notebook.active").attr("data-cid")
    //    $("#notebook_name").val(notebook_name)
    //    $("#notebook_id").val(notebook_id)
    //})
    var url=$(".like-content").attr("data-href")
    $.ajax({
        type: "get",
        url:"order/asc"+url,
        dataType: "json",
        success: function(data){


            for(var i=0;i<data[0].comments.length;i++){

                var floor=i+2;

                $("#comment-list").append(" <div class='note-comment clearfix' id='comment-" + i +"'>" +
                    "<div class='content'>" +
                    "<div class='meta-top'>"+
                    "<a class='avatar' href='/users/c90cdc9eaf14'>"+
                    "<img src='"+data[0].comments[i].head+"' alt='100'>"+
                    "</a>"+
                    "<p>"+
                    "<a class='author-name' href='/users/c90cdc9eaf14'>"+data[0].comments[i].name+"</a>"+
                    "</p>"+
                    "<span class='reply-time'>"+
                    "<small> " + floor +" 楼 · </small>"+
                    "<a href='/p/26ff5c0bfe6a/comments/3073208#comment-3073208'>"+data[0].comments[i].time+"</a>"+
                    "</span>"+
                    "</div>"+

                    "<p>"+data[0].comments[i].content+"</p>"+


                    "<div class='comment-footer clearfix text-right'>"+

                    "<a data-id='3073208' class='like pull-left' href='javascript:void(0)'>"+
                    "<i class='fa fa-heart-o'></i>喜欢<span>(0)</span>"+
                    "</a>"+

                    "<div class='dropdown report' data-commenter-id='2307105' style='display: none;'>"+
                    "<a class='report_comment' href='javascript:void(0)' data-toggle='dropdown'>举报</a>"+
                    "<ul class='dropdown-menu arrow-top'>"+
                    "<li><a data-type='json' data-remote='true' rel='nofollow' data-method='post' href='/comments/3073208/abuse_reports?type=ad'>广告及垃圾信息</a></li>"+
                    "<li><a data-toggle='modal' data-url='/comments/3073208/abuse_reports' href='#report-modal'>其他</a></li>"+
                    "</ul>"+
                    "</div>"+
                    "<a parent_name='"+data[0].comments[i].name+"' data-id='"+data[0].comments[i].time+"' data-nickname='"+data[0].comments[i].name+"' class='reply' href='javascript:void(0)'>回复</a>"+
                    "</div>" +

                    "<div class='child-comment-list '></div></div></div>")



                if(data[0].comments[i].second_comment){

                    for(var t=0;t<data[0].comments[i].second_comment.length;t++){
                        $(".child-comment-list").eq(i).append("  <div class='child-comment' id='comment-3075039' data-id='3075039'>" +
                            "<p>"+
                            "<a class='blue-link' href='/users/7a49d20deb9b'>"+data[0].comments[i].second_comment[t].name+"</a>："+
                            data[0].comments[i].second_comment[t].content+
                            "</p>"+
                            "<div class='child-comment-footer text-right clearfix'>"+
                            "<a parent_name='"+data[0].comments[i].second_comment[t].name+"' data-id='"+data[0].comments[i].time+"' data-nickname='"+data[0].comments[i].name+"' class='reply' href='javascript:void(null)'>回复</a>"+
                            "<span class='reply-time pull-left'>"+
                            "<a href='/p/26ff5c0bfe6a/comments/3075039#comment-3075039'>"+data[0].comments[i].second_comment[t].time+"</a>"+
                            "</span>"+
                            "</div>"+
                            "</div>"
                        )


                    }
                    $(".child-comment-list").eq(i).append(
                        "<div data-state='remaining-child-comments'></div>"+
                        "<div class='comment-toolbar clearfix'>"+
                        "<span class='pull-right'>"+
                        "<a data-id='3073208' class='reply' href='javascript:void(null)'><i class='fa fa-pencil'></i> 添加新回复</a>"+
                        "</span>"+
                        "</div>"+
                        "<form class='new_comment second_comment' id='new_comment'   method='post'>"+
                        "<input name='utf8' type='hidden' value='✓'>"+
                        "<div class='comment-text'>"+
                        "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>"+
                        "<div style='display: none;'>"+
                        "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />"+
                        "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />"+
                        "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />"+
                        "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />"+
                        "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />"+
                        "</div>"+
                        "</div>"+
                        "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>"+
                        "<div class='emoji'>"+
                        "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                        "</div>"+
                        " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                        "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                        "</div>"+
                        "</div>"+
                        "</form>"

                    )


                }else{
                    $(".child-comment-list").eq(i).append( "<form class='new_comment second_comment' id='new_comment'   method='post'>"+
                        "<input name='utf8' type='hidden' value='✓'>"+
                        "<div class='comment-text'>"+
                        "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>"+
                        "<div style='display: none;'>"+
                        "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />"+
                        "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />"+
                        "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />"+
                        "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />"+
                        "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />"+
                        "</div>"+
                        "</div>"+
                        "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>"+
                        "<div class='emoji'>"+
                        "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                        "</div>"+
                        " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                        "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                        "</div>"+
                        "</div>"+
                        "</form>")
                }


















            }



            if(data[0].comments.length>9) {
                $("#comment-list").append("<p class='load-more'>" +
                    "<a class='blue-link' data-type='html' data-action='load-comments' data-remote='true' >加载更多 <i class='fa fa-arrow-down'></i></a>" +
                    "</p>")
            }
        }
    })









    $(".order").find("a").click(function(){
        $(this).addClass("active").siblings($(this)).removeClass("active")
        var data_order=$(this).attr("data-order")
        var url=$(".like-content").attr("data-href")
        switch (data_order){
            case "asc":
                $(this).parent().parent().parent().find("#comment-list").addClass("asc").removeClass("desc")
                $.ajax({
                    type: "get",
                    url:"order/asc"+url,
                    dataType: "json",
                    success: function(data){
                        $("#comment-list").empty();

                        if(data[0].comments.length) {
                            for (var i = 0; i < data[0].comments.length; i++) {

                                var floor = i + 2;

                                $("#comment-list").append(" <div class='note-comment clearfix' id='comment-" + i + "'>" +
                                    "<div class='content'>" +
                                    "<div class='meta-top'>" +
                                    "<a class='avatar' href='/users/c90cdc9eaf14'>" +
                                    "<img src='" + data[0].comments[i].head + "' alt='100'>" +
                                    "</a>" +
                                    "<p>" +
                                    "<a class='author-name' href='/users/c90cdc9eaf14'>" + data[0].comments[i].name + "</a>" +
                                    "</p>" +
                                    "<span class='reply-time'>" +
                                    "<small> " + floor + " 楼 · </small>" +
                                    "<a href='/p/26ff5c0bfe6a/comments/3073208#comment-3073208'>" + data[0].comments[i].time + "</a>" +
                                    "</span>" +
                                    "</div>" +

                                    "<p>" + data[0].comments[i].content + "</p>" +


                                    "<div class='comment-footer clearfix text-right'>" +

                                    "<a data-id='3073208' class='like pull-left' href='javascript:void(0)'>" +
                                    "<i class='fa fa-heart-o'></i>喜欢<span>(0)</span>" +
                                    "</a>" +

                                    "<div class='dropdown report' data-commenter-id='2307105' style='display: none;'>" +
                                    "<a class='report_comment' href='javascript:void(0)' data-toggle='dropdown'>举报</a>" +
                                    "<ul class='dropdown-menu arrow-top'>" +
                                    "<li><a data-type='json' data-remote='true' rel='nofollow' data-method='post' href='/comments/3073208/abuse_reports?type=ad'>广告及垃圾信息</a></li>" +
                                    "<li><a data-toggle='modal' data-url='/comments/3073208/abuse_reports' href='#report-modal'>其他</a></li>" +
                                    "</ul>" +
                                    "</div>" +
                                    "<a parent_name='" + data[0].comments[i].name + "' data-id='" + data[0].comments[i].time + "' data-nickname='" + data[0].comments[i].name + "' class='reply' href='javascript:void(0)'>回复</a>" +
                                    "</div>" +

                                    "<div class='child-comment-list '></div></div></div>")


                                if (data[0].comments[i].second_comment) {

                                    for (var t = 0; t < data[0].comments[i].second_comment.length; t++) {
                                        $(".child-comment-list").eq(i).append("  <div class='child-comment' id='comment-3075039' data-id='3075039'>" +
                                            "<p>" +
                                            "<a class='blue-link' href='/users/7a49d20deb9b'>" + data[0].comments[i].second_comment[t].name + "</a>：" +
                                            data[0].comments[i].second_comment[t].content +
                                            "</p>" +
                                            "<div class='child-comment-footer text-right clearfix'>" +
                                            "<a parent_name='" + data[0].comments[i].second_comment[t].name + "' data-id='" + data[0].comments[i].time + "' data-nickname='" + data[0].comments[i].name + "' class='reply' href='javascript:void(null)'>回复</a>" +
                                            "<span class='reply-time pull-left'>" +
                                            "<a href='/p/26ff5c0bfe6a/comments/3075039#comment-3075039'>" + data[0].comments[i].second_comment[t].time + "</a>" +
                                            "</span>" +
                                            "</div>" +
                                            "</div>"
                                        )


                                    }
                                    $(".child-comment-list").eq(i).append(
                                        "<div data-state='remaining-child-comments'></div>" +
                                        "<div class='comment-toolbar clearfix'>" +
                                        "<span class='pull-right'>" +
                                        "<a data-id='3073208' class='reply' href='javascript:void(null)'><i class='fa fa-pencil'></i> 添加新回复</a>" +
                                        "</span>" +
                                        "</div>" +
                                        "<form class='new_comment second_comment' id='new_comment'   method='post'>" +
                                        "<input name='utf8' type='hidden' value='✓'>" +
                                        "<div class='comment-text'>" +
                                        "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>" +
                                        "<div style='display: none;'>" +
                                        "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />" +
                                        "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />" +
                                        "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />" +
                                        "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />" +
                                        "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />" +
                                        "</div>" +
                                        "</div>" +
                                        "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>" +
                                        "<div class='emoji'>" +
                                        "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>" +
                                        "</div>" +
                                        " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />" +
                                        "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>" +
                                        "</div>" +
                                        "</div>" +
                                        "</form>"
                                    )


                                } else {
                                    $(".child-comment-list").eq(i).append("<form class='new_comment second_comment' id='new_comment'   method='post'>" +
                                        "<input name='utf8' type='hidden' value='✓'>" +
                                        "<div class='comment-text'>" +
                                        "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>" +
                                        "<div style='display: none;'>" +
                                        "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />" +
                                        "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />" +
                                        "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />" +
                                        "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />" +
                                        "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />" +
                                        "</div>" +
                                        "</div>" +
                                        "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>" +
                                        "<div class='emoji'>" +
                                        "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>" +
                                        "</div>" +
                                        " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />" +
                                        "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>" +
                                        "</div>" +
                                        "</div>" +
                                        "</form>")
                                }


                            }

                            if(data[0].comments.length>9) {
                                $("#comment-list").append("<p class='load-more'>" +
                                    "<a class='blue-link' data-type='html' data-action='load-comments' data-remote='true' >加载更多 <i class='fa fa-arrow-down'></i></a>" +
                                    "</p>")
                            }
                        }
                    }
                })
                break;

            case "desc":
                $(this).parent().parent().parent().find("#comment-list").addClass("desc").removeClass("asc")
                $.ajax({
                    type: "get",
                    url:"order/desc"+url,
                    dataType: "json",
                    success: function(data){
                        $("#comment-list").empty();
                        var comments=data[0].comments.length-1
                        if(data[0].comments.length) {
                        for(var i=comments;i>-1;i--){
                        //for(var i=0;i<data[0].comments.length;i++){



                            $("#comment-list").append(" <div class='note-comment clearfix' id='comment-" + i +"'>" +
                            "<div class='content'>" +
                                "<div class='meta-top'>"+
                                    "<a class='avatar' href='/users/c90cdc9eaf14'>"+
                                        "<img src='"+data[0].comments[i].head+"' alt='100'>"+
                                    "</a>"+
                                    "<p>"+
                                        "<a class='author-name' href='/users/c90cdc9eaf14'>"+data[0].comments[i].name+"</a>"+
                                    "</p>"+
                                    "<span class='reply-time'>"+
                                        "<a href='/p/26ff5c0bfe6a/comments/3073208#comment-3073208'>"+data[0].comments[i].time+"</a>"+
                                    "</span>"+
                                "</div>"+

                                "<p>"+data[0].comments[i].content+"</p>"+


                                "<div class='comment-footer clearfix text-right'>"+

                                "<a data-id='3073208' class='like pull-left' href='javascript:void(0)'>"+
                                "<i class='fa fa-heart-o'></i>喜欢<span>(0)</span>"+
                                "</a>"+

                                "<div class='dropdown report' data-commenter-id='2307105' style='display: none;'>"+
                                    "<a class='report_comment' href='javascript:void(0)' data-toggle='dropdown'>举报</a>"+
                                    "<ul class='dropdown-menu arrow-top'>"+
                                        "<li><a data-type='json' data-remote='true' rel='nofollow' data-method='post' href='/comments/3073208/abuse_reports?type=ad'>广告及垃圾信息</a></li>"+
                                        "<li><a data-toggle='modal' data-url='/comments/3073208/abuse_reports' href='#report-modal'>其他</a></li>"+
                                    "</ul>"+
                                "</div>"+
                                "<a parent_name='"+data[0].comments[i].name+"' data-id='"+data[0].comments[i].time+"' data-nickname='"+data[0].comments[i].name+"' class='reply' href='javascript:void(0)'>回复</a>"+
                            "</div>" +

                             "<div class='child-comment-list '></div></div></div>")


                            var des_i=comments-i
                            if(data[0].comments[i].second_comment){

                               for(var t=0;t<data[0].comments[i].second_comment.length;t++){
                                   $(".child-comment-list").eq(des_i).append("  <div class='child-comment' id='comment-3075039' data-id='3075039'>" +
                                        "<p>"+
                                        "<a class='blue-link' href='/users/7a49d20deb9b'>"+data[0].comments[i].second_comment[t].name+"</a>："+
                                        data[0].comments[i].second_comment[t].content+
                                        "</p>"+
                                       "<div class='child-comment-footer text-right clearfix'>"+
                                           "<a parent_name='"+data[0].comments[i].second_comment[t].name+"' data-id='"+data[0].comments[i].time+"' data-nickname='"+data[0].comments[i].name+"' class='reply' href='javascript:void(null)'>回复</a>"+
                                           "<span class='reply-time pull-left'>"+
                                           "<a href='/p/26ff5c0bfe6a/comments/3075039#comment-3075039'>"+data[0].comments[i].second_comment[t].time+"</a>"+
                                           "</span>"+
                                       "</div>"+
                                   "</div>"
                                   )


                               }
                                $(".child-comment-list").eq(des_i).append(
                                "<div data-state='remaining-child-comments'></div>"+
                                "<div class='comment-toolbar clearfix'>"+
                                "<span class='pull-right'>"+
                                "<a data-id='3073208' class='reply' href='javascript:void(null)'><i class='fa fa-pencil'></i> 添加新回复</a>"+
                                "</span>"+
                                "</div>"+
                                "<form class='new_comment second_comment' id='new_comment'   method='post'>"+
                                "<input name='utf8' type='hidden' value='✓'>"+
                                "<div class='comment-text'>"+
                                "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>"+
                                "<div style='display: none;'>"+
                                "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />"+
                                "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />"+
                                "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />"+
                                "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />"+
                                "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />"+
                                "</div>"+
                                "</div>"+
                                "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>"+
                                "<div class='emoji'>"+
                                "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                                "</div>"+
                                " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                                "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                                "</div>"+
                                "</div>"+
                                "</form>"

                                )


                            }else{
                                $(".child-comment-list").eq(des_i).append( "<form class='new_comment second_comment' id='new_comment'   method='post'>"+
                                    "<input name='utf8' type='hidden' value='✓'>"+
                                    "<div class='comment-text'>"+
                                    "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>"+
                                    "<div style='display: none;'>"+
                                    "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />"+
                                    "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />"+
                                    "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />"+
                                    "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />"+
                                    "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />"+
                                    "</div>"+
                                    "</div>"+
                                    "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>"+
                                    "<div class='emoji'>"+
                                    "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                                    "</div>"+
                                    " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                                    "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                                    "</div>"+
                                    "</div>"+
                                    "</form>")
                            }


















                        }

                            if(data[0].comments.length>9) {
                                $("#comment-list").append("<p class='load-more'>" +
                                    "<a class='blue-link' data-type='html' data-action='load-comments' data-remote='true'>加载更多 <i class='fa fa-arrow-down'></i></a>" +
                                    "</p>")
                            }
                        }

                        //console.log(JSON.stringify(data))
                    }
                })

                break;

            case "likes_count":

                break;

        }
    })



    $('body').on('click' , '.asc .load-more' , function(){
        var comment_num=$(".note-comment").length
        var url=$(".like-content").attr("data-href")
        $.ajax({
            type: "post",
            url:"order/asc/more"+url,
            data:{"comment_num":comment_num},
            dataType: "json",
            success: function(data){

                $(".load-more").remove();
                var note_comment=$(".note-comment").length
                for(var i=0;i<data[0].comments.length;i++){

                    var floor=i+note_comment+2;

                    $("#comment-list").append(" <div class='note-comment clearfix' id='comment-" + i +"'>" +
                        "<div class='content'>" +
                        "<div class='meta-top'>"+
                        "<a class='avatar' href='/users/c90cdc9eaf14'>"+
                        "<img src='"+data[0].comments[i].head+"' alt='100'>"+
                        "</a>"+
                        "<p>"+
                        "<a class='author-name' href='/users/c90cdc9eaf14'>"+data[0].comments[i].name+"</a>"+
                        "</p>"+
                        "<span class='reply-time'>"+
                        "<small> " + floor +" 楼 · </small>"+
                        "<a href='/p/26ff5c0bfe6a/comments/3073208#comment-3073208'>"+data[0].comments[i].time+"</a>"+
                        "</span>"+
                        "</div>"+

                        "<p>"+data[0].comments[i].content+"</p>"+


                        "<div class='comment-footer clearfix text-right'>"+

                        "<a data-id='3073208' class='like pull-left' href='javascript:void(0)'>"+
                        "<i class='fa fa-heart-o'></i>喜欢<span>(0)</span>"+
                        "</a>"+

                        "<div class='dropdown report' data-commenter-id='2307105' style='display: none;'>"+
                        "<a class='report_comment' href='javascript:void(0)' data-toggle='dropdown'>举报</a>"+
                        "<ul class='dropdown-menu arrow-top'>"+
                        "<li><a data-type='json' data-remote='true' rel='nofollow' data-method='post' href='/comments/3073208/abuse_reports?type=ad'>广告及垃圾信息</a></li>"+
                        "<li><a data-toggle='modal' data-url='/comments/3073208/abuse_reports' href='#report-modal'>其他</a></li>"+
                        "</ul>"+
                        "</div>"+
                        "<a parent_name='"+data[0].comments[i].name+"' data-id='"+data[0].comments[i].time+"' data-nickname='"+data[0].comments[i].name+"' class='reply' href='javascript:void(0)'>回复</a>"+
                        "</div>" +

                        "<div class='child-comment-list '></div></div></div>")



                    if(data[0].comments[i].second_comment){

                        for(var t=0;t<data[0].comments[i].second_comment.length;t++){
                            $(".child-comment-list").eq(i).append("  <div class='child-comment' id='comment-3075039' data-id='3075039'>" +
                                "<p>"+
                                "<a class='blue-link' href='/users/7a49d20deb9b'>"+data[0].comments[i].second_comment[t].name+"</a>："+
                                data[0].comments[i].second_comment[t].content+
                                "</p>"+
                                "<div class='child-comment-footer text-right clearfix'>"+
                                "<a parent_name='"+data[0].comments[i].second_comment[t].name+"' data-id='"+data[0].comments[i].time+"' data-nickname='"+data[0].comments[i].name+"' class='reply' href='javascript:void(null)'>回复</a>"+
                                "<span class='reply-time pull-left'>"+
                                "<a href='/p/26ff5c0bfe6a/comments/3075039#comment-3075039'>"+data[0].comments[i].second_comment[t].time+"</a>"+
                                "</span>"+
                                "</div>"+
                                "</div>"
                            )


                        }
                        $(".child-comment-list").eq(i).append(
                            "<div data-state='remaining-child-comments'></div>"+
                            "<div class='comment-toolbar clearfix'>"+
                            "<span class='pull-right'>"+
                            "<a data-id='3073208' class='reply' href='javascript:void(null)'><i class='fa fa-pencil'></i> 添加新回复</a>"+
                            "</span>"+
                            "</div>"+
                            "<form class='new_comment second_comment' id='new_comment'   method='post'>"+
                            "<input name='utf8' type='hidden' value='✓'>"+
                            "<div class='comment-text'>"+
                            "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>"+
                            "<div style='display: none;'>"+
                            "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />"+
                            "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />"+
                            "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />"+
                            "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />"+
                            "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />"+
                            "</div>"+
                            "</div>"+
                            "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>"+
                            "<div class='emoji'>"+
                            "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                            "</div>"+
                            " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                            "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                            "</div>"+
                            "</div>"+
                            "</form>"

                        )


                    }else{
                        $(".child-comment-list").eq(i).append( "<form class='new_comment second_comment' id='new_comment'   method='post'>"+
                            "<input name='utf8' type='hidden' value='✓'>"+
                            "<div class='comment-text'>"+
                            "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>"+
                            "<div style='display: none;'>"+
                            "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />"+
                            "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />"+
                            "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />"+
                            "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />"+
                            "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />"+
                            "</div>"+
                            "</div>"+
                            "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>"+
                            "<div class='emoji'>"+
                            "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                            "</div>"+
                            " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                            "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                            "</div>"+
                            "</div>"+
                            "</form>")
                    }

                }



                if(data[0].comments.length==10){
                    $("#comment-list").append("<p class='load-more'>" +
                        "<a class='blue-link' data-type='html' data-action='load-comments' data-remote='true' >加载更多 <i class='fa fa-arrow-down'></i></a>"+
                        "</p>")

                }

            }
        })
    })




    $('body').on('click' , '.desc .load-more' , function(){
        var comment_num=$(".note-comment").length
        var url=$(".like-content").attr("data-href")
        $.ajax({
            type: "post",
            url:"order/desc/more"+url,
            data:{"comment_num":comment_num},
            dataType: "json",
            success: function(data){
                $(".load-more").remove();
                console.log(data)
                console.log(JSON.stringify(data))
                var comments=data[0].comments.length-1
                var note_comment=$(".note-comment").length
                for(var i=comments;i>-1;i--){
                    //for(var i=0;i<data[0].comments.length;i++){
                        console.log(i)


                    $("#comment-list").append(" <div class='note-comment clearfix' id='comment-" + i +"'>" +
                        "<div class='content'>" +
                        "<div class='meta-top'>"+
                        "<a class='avatar' href='/users/c90cdc9eaf14'>"+
                        "<img src='"+data[0].comments[i].head+"' alt='100'>"+
                        "</a>"+
                        "<p>"+
                        "<a class='author-name' href='/users/c90cdc9eaf14'>"+data[0].comments[i].name+"</a>"+
                        "</p>"+
                        "<span class='reply-time'>"+
                        "<a href='/p/26ff5c0bfe6a/comments/3073208#comment-3073208'>"+data[0].comments[i].time+"</a>"+
                        "</span>"+
                        "</div>"+

                        "<p>"+data[0].comments[i].content+"</p>"+


                        "<div class='comment-footer clearfix text-right'>"+

                        "<a data-id='3073208' class='like pull-left' href='javascript:void(0)'>"+
                        "<i class='fa fa-heart-o'></i>喜欢<span>(0)</span>"+
                        "</a>"+

                        "<div class='dropdown report' data-commenter-id='2307105' style='display: none;'>"+
                        "<a class='report_comment' href='javascript:void(0)' data-toggle='dropdown'>举报</a>"+
                        "<ul class='dropdown-menu arrow-top'>"+
                        "<li><a data-type='json' data-remote='true' rel='nofollow' data-method='post' href='/comments/3073208/abuse_reports?type=ad'>广告及垃圾信息</a></li>"+
                        "<li><a data-toggle='modal' data-url='/comments/3073208/abuse_reports' href='#report-modal'>其他</a></li>"+
                        "</ul>"+
                        "</div>"+
                        "<a parent_name='"+data[0].comments[i].name+"' data-id='"+data[0].comments[i].time+"' data-nickname='"+data[0].comments[i].name+"' class='reply' href='javascript:void(0)'>回复</a>"+
                        "</div>" +

                        "<div class='child-comment-list '></div></div></div>")


                    var des_i=note_comment+comments-i
                    if(data[0].comments[i].second_comment){

                        for(var t=0;t<data[0].comments[i].second_comment.length;t++){
                            $(".child-comment-list").eq(des_i).append("  <div class='child-comment' id='comment-3075039' data-id='3075039'>" +
                                "<p>"+
                                "<a class='blue-link' href='/users/7a49d20deb9b'>"+data[0].comments[i].second_comment[t].name+"</a>："+
                                data[0].comments[i].second_comment[t].content+
                                "</p>"+
                                "<div class='child-comment-footer text-right clearfix'>"+
                                "<a parent_name='"+data[0].comments[i].second_comment[t].name+"' data-id='"+data[0].comments[i].time+"' data-nickname='"+data[0].comments[i].name+"' class='reply' href='javascript:void(null)'>回复</a>"+
                                "<span class='reply-time pull-left'>"+
                                "<a href='/p/26ff5c0bfe6a/comments/3075039#comment-3075039'>"+data[0].comments[i].second_comment[t].time+"</a>"+
                                "</span>"+
                                "</div>"+
                                "</div>"
                            )


                        }
                        $(".child-comment-list").eq(des_i).append(
                            "<div data-state='remaining-child-comments'></div>"+
                            "<div class='comment-toolbar clearfix'>"+
                            "<span class='pull-right'>"+
                            "<a data-id='3073208' class='reply' href='javascript:void(null)'><i class='fa fa-pencil'></i> 添加新回复</a>"+
                            "</span>"+
                            "</div>"+
                            "<form class='new_comment second_comment' id='new_comment'   method='post'>"+
                            "<input name='utf8' type='hidden' value='✓'>"+
                            "<div class='comment-text'>"+
                            "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>"+
                            "<div style='display: none;'>"+
                            "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />"+
                            "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />"+
                            "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />"+
                            "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />"+
                            "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />"+
                            "</div>"+
                            "</div>"+
                            "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>"+
                            "<div class='emoji'>"+
                            "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                            "</div>"+
                            " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                            "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                            "</div>"+
                            "</div>"+
                            "</form>"

                        )


                    }else{
                        $(".child-comment-list").eq(des_i).append( "<form class='new_comment second_comment' id='new_comment'   method='post'>"+
                            "<input name='utf8' type='hidden' value='✓'>"+
                            "<div class='comment-text'>"+
                            "<textarea maxlength='2000' placeholder='写下你的评论…' class='mousetrap' name='content' id='comment_content'></textarea>"+
                            "<div style='display: none;'>"+
                            "回复姓名：<input type='text' name='data_name' value='0' class='data_name'/><br />"+
                            "回复时间：<input type='text' name='data_time' value='1' class='data_time'/><br />"+
                            "姓名：<input type='text' name='name' value='<%= user.name %>' /><br />"+
                            "邮箱：<input type='text' name='email' value='<%= user.email %>' /><br />"+
                            "网址：<input type='text' name='website' value='/u/<%= user.name %>' /><br />"+
                            "</div>"+
                            "</div>"+
                            "<input type='submit'  value='发 表' class='btn btn-info' data-disable-with='提交中...'>"+
                            "<div class='emoji'>"+
                            "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                            "</div>"+
                            " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                            "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                            "</div>"+
                            "</div>"+
                            "</form>")
                    }


















                }




                if(data[0].comments.length==10){
                    $("#comment-list").append("<p class='load-more'>" +
                        "<a class='blue-link' data-type='html' data-action='load-comments' data-remote='true' >加载更多 <i class='fa fa-arrow-down'></i></a>"+
                        "</p>")

                }

            }
        })
    })










    $(".user.avatar").bind('click', function() {
        if($(this).parent().hasClass("open")){
            $(this).parent().removeClass("open")
        }else{
            $(this).parent().addClass("open")
        }

    })
    jQuery("body").click(function(e){

        e = e || window.event;


        var obj =e.target || e.srcElement;

        if($(obj).closest(".user.avatar").length <=0){//点击的区域如果没有id为explain的标签，就将explain收起隐藏

            $(".navbar-user").removeClass("open")


        }

        if($(obj).closest(".dropdown-toggle").length <=0){//点击的区域如果没有id为explain的标签，就将explain收起隐藏

            $(".one-notebook").removeClass("open")


        }


        if($(obj).closest(".modal-dialog").length <=0){//点击的区域如果没有id为explain的标签，就将explain收起隐藏

            $("#likes-modal").removeClass("in")
            $(".modal-backdrop.fade.in").remove()

        }


    });

    //$(".note-comment .clearfix").find($(".reply")).click(function(){
    //    var data_time=$(this).attr('data-id');
    //    var data_name=$(this).attr('data-nickname');
    //    var parent_name=$(this).attr('parent_name');
    //    $(this).parent().parent().parent().find($(".second_comment")).toggle();
    //    $(this).parent().parent().parent().find($(".mousetrap")).val("@"+parent_name+" ")
    //    $(this).parent().parent().parent().find($(".mousetrap")).attr("xxx")
    //
    //    console.log(data_time,data_name)
    //    //$(this).parent().parent().parent().find($(".data_time")).val(data_time)
    //    //$(this).parent().parent().parent().find($(".data_name")).val(data_name)
    //    $(".data_time").val(data_time)
    //    $(".data_name").val(data_name)
    //})

    $('body').on('click' , '.reply' , function(){

        var data_time=$(this).attr('data-id');
        var data_name=$(this).attr('data-nickname');
        var parent_name=$(this).attr('parent_name');
        $(this).parent().parent().parent().find($(".second_comment")).toggle();
        $(this).parent().parent().parent().find($(".mousetrap")).val("@"+parent_name+" ")
        $(this).parent().parent().parent().find($(".mousetrap")).attr("xxx")

        console.log(data_time,data_name)
        //$(this).parent().parent().parent().find($(".data_time")).val(data_time)
        //$(this).parent().parent().parent().find($(".data_name")).val(data_name)
        $(".data_time").val(data_time)
        $(".data_name").val(data_name)
    });





        $(".emoji").click(function(){
        alert($(this).parent().parent().find(".data_time").val())
        alert($(this).parent().parent().find(".data_name").val())
    })



    $(".middle").css("height",$(window).height()-21)
    $(".aside").css("height",$(window).height()-21)
    $(".main_article").css("height",$(window).height()-21)

    $(".dropdown-toggle").bind('click', function() {
        if($(this).parent().hasClass("open")){
            $(this).parent().removeClass("open")
        }else{
            $(this).parent().addClass("open")
        }

    })
    /*取消修改文集*/
    $(".cancel-button").click(function(){
        $(".modal-backdrop.fade.in").remove();
        $(".rename-notebook-modal").hide();
        $(".rename-notebook-modal").removeClass("in");
    })

})



$(window).resize(function(){
    $(".middle").css("height",$(window).height()-21)
    $(".aside").css("height",$(window).height()-21)
    $(".main_article").css("height",$(window).height()-21)
})

$(window).load(function(){

    var notebook_id=$(".one-notebook.active").attr("data-cid")
    $("#notebook_id").val(notebook_id)

    $(".create-notebook").click(function(){
        $(this).parent().find(".hide").toggle()
    })



    $(document).on('click','[data-action="delete-notebook"]',function(){

        $.ajax({
            type: 'DELETE',
            url: "/post/"+notebook_id
        })
            .done(function (results) {
                window.location.href='/post'
            })


    });





/*修改文集*/
    $(document).on('click','[data-action="rename-notebook"]',function(){

       $("body").append("<div class='modal-backdrop fade in' style='opacity: 1; background: rgb(255, 255, 255);'></div>")
        $(".rename-notebook-modal").show();
        $(".rename-notebook-modal").addClass("in");

        var notebook_name=$(this).parent().parent().parent().find(".notebook-name span").html()
        $(".input-large.notebook-input").val(notebook_name)

        $(".input-large.notebook-input").focus();
        $(".input-large.notebook-input").select();
    });

/*查看喜欢*/
$(document).on('click','[data-toggle="tooltip"]',function(){

    $("body").append("<div class='modal-backdrop fade in' style='opacity: 1; background: rgb(255, 255, 255);'></div>")
    $("#likes-modal").addClass("in")
    var url= $(".like-content").attr("data-href")
    $.ajax({
        type: 'POST',
        url: "detail"+url,
        dataType: "json",
        success: function(data){
            for (var i=0;i<data[0].likes.length;i++){
                $(".unstyled.users").append("<li>"+
                "<a class='avatar' href=''>"+
                        "<img src='http://upload.jianshu.io/users/upload_avatars/2093398/3084e12ff8ae?imageMogr/thumbnail/90x90/quality/100'>"+
                "</a>"+
                "<a class='blue-link' href='/users/26b947585fb7'>"+
                    data[0].likes[i].name+
                "</a>"+
                "<span class='time'>"+
                    data[0].likes[i].time+
                "</span>"+
                "</li>"
                )
            }

        }

    })


});


    /*关闭查看喜欢*/
$(".close").click(function(){
    $(".modal-backdrop.fade.in").remove();
    $("#likes-modal").removeClass("in");
})


    /*提交修改文集*/
    $(document).on('click','[data-action="submit-rename-notebook"]',function(){
         var notebook_name=$("#notebook_name").val();
        $.ajax({
            type: 'PUT',
            url: "/post/"+notebook_id,
            data:{notebook_name:notebook_name},

        })
            .done(function (results) {
                window.location.href='/post'
            })

    });




})