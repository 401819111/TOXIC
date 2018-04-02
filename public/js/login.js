$(function(){
    var h =$(window).height();
    console.log(h)
    var top=(h-$("#login").height())/2
    console.log($("#login").height())
  $("#login").css("marginTop",top) 	
});
$("#loginBtn").on("mousedown",function(){
    $(this).css({"background":"#E14F00","color":"white"})
})
$("#loginBtn").on("mouseup",
function(){
    $(this).css({"background":"#ff5a00","color":"white"})
})
$("#login-signup").on("mousedown",function(){
    $(this).css({"background":"#ff5a00","color":"white"})
})
$("#login-signup").on("mouseup",
function(){
    $(this).css({"background":"white","color":"#ff5a00"})
})


$("#login-signup").click(function() {

    $("#login-login").css({
        transform: 'rotateY(180deg)'
    });
    $("#login-form2").css({
        "transform": 'rotateY(0deg)'
    });
    setTimeout(() => {
        $("#login-login").css("display","none");
    }, 600);
setTimeout(function(){

    $("#login-form2").css("display","block");
},700)

});
$("#login-re").on("click",function(){
    console.log(1234124)
    $("#login-form2").css({
        "transform": 'rotateY(180deg)'
    });
    $("#login-login").css({
        transform: 'rotateY(0deg)'
    });
    setTimeout(() => {
        $("#login-form2").css("display","none");
    }, 600);
    setTimeout(function(){
    $("#login-login").css({"display":"block"});
},700)
})