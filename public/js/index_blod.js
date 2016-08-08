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

    $(".note-comment .clearfix").find($(".reply")).click(function(){
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
    })

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
    });



})