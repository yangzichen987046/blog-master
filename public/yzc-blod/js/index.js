/**
 * Created by Administrator on 2016/7/7.
 */
$(function(){
    $(".middle").css("height",$(window).height()-21)
    $(".aside").css("height",$(window).height()-21)
    $(".main").css("height",$(window).height()-21)
})

$(window).resize(function(){
    $(".middle").css("height",$(window).height()-21)
    $(".aside").css("height",$(window).height()-21)
    $(".main").css("height",$(window).height()-21)
})