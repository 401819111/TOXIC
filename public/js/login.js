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
var num=1;
var num1=1;
$("#login-signup").click(function() {
    num1=0;
    if(num==1){
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
}
});




$("#login-re").on("click",function(){
    num1=1
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
$("#login-forgetpwd").on("click",function(){
    num=0; 
    if(num1==1){
        $("#login-form3").css({
            "transform": 'rotateY(0deg)'
        });
        $("#login-login").css({
            transform: 'rotateY(180deg)'
        });
        setTimeout(() => {
            $("#login-form3").css("display","block");
        }, 700);
        setTimeout(function(){
        $("#login-login").css({"display":"none"});
    },700)
    
    }
    
})

$("#login-return").on("click",function(){
    num=1;
    $("#login-form3").css({
        "transform": 'rotateY(180deg)'
    });
    $("#login-login").css({
        transform: 'rotateY(0deg)'
    });
    setTimeout(() => {
        $("#login-form3").css("display","none");
    }, 600);
    setTimeout(function(){
    $("#login-login").css({"display":"block"});
},700)
})