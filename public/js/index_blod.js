/**
 * Created by Administrator on 2016/7/7.
 */

$(function(){
    //$(".one-notebook").click(function(){
    //    $(this).addClass("active").siblings($(this)).removeClass("active")
    //    var notebook_name=$(".one-notebook.active").find($(".word")).html()
    //    var notebook_id=$(".one-notebook.active").attr("data-cid")
    //    $("#notebook_name").val(notebook_name)
    //    $("#notebook_id").val(notebook_id)
    //})


    $(".order").find("a").click(function(){
        $(this).addClass("active").siblings($(this)).removeClass("active")
        var data_order=$(this).attr("data-order")
        var url=$(".like-content").attr("data-href")
        switch (data_order){
            case "asc":
                alert(1);
                break;

            case "desc":
                $.ajax({
                    type: "get",
                    url:"order"+url,
                    dataType: "json",
                    success: function(data){
                        $(".note-comment").remove()

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
                                        "<small> " + floor +"楼 · </small>"+
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
                                   "</div>"+
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
                                    "<input type='submit'  value='发 表1' class='btn btn-info' data-disable-with='提交中...'>"+
                                    "<div class='emoji'>"+
                                    "<a href='#emoji-modal' data-toggle='modal'><i class='fa fa-smile-o'></i></a>"+
                                    "</div>"+
                                    " <input class='hotkey' type='submit' value='Ctrl+Enter 发表' />"+
                                    "<span class='warning' style='display: none'><i class='fa fa-exclamation-circle'></i><span class='warning-text'></span></span>"+
                                    "</div>"+
                                    "</div>"+
                                    "</form>"

                                   )


                               }
                            }


















                        }





                        //console.log(JSON.stringify(data))
                    }
                })

                break;

            case "likes_count":
                alert(3);
                break;

        }
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






    $(document).on('click','[data-action="rename-notebook"]',function(){

       $("body").append("<div class='modal-backdrop fade in' style='opacity: 1; background: rgb(255, 255, 255);'></div>")
        $(".rename-notebook-modal").show();
        $(".rename-notebook-modal").addClass("in");

        var notebook_name=$(this).parent().parent().parent().find(".notebook-name span").html()
        $(".input-large.notebook-input").val(notebook_name)

        $(".input-large.notebook-input").focus();
        $(".input-large.notebook-input").select();
    });





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