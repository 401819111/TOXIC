
var scrollHeight=document.getElementById("mencheng").scrollHeight;

$(".inputOne").click(function(){
  $(".payOne").css("display","block");
    $(".divOne").children(".div1").css("display","block");
    $(".divThree").children(".div2").css("display","none")
    $(".payTwo").css("display","none");
    console.log(7)
});
$(".inputTwo").click(function(){
    $(".payOne").css("display","none");
    $(".divOne").children(".div1").css("display","none")
    $(".payTwo").css("display","block");
    $(".divThree").children(".div2").css("display","block")
    console.log(7)
});

$("#truePay").click(function () {
    $(".menceng").css("display","block");
});
$("#succPay").click(function () {
    $(".menceng").css("display","none")
});
$("#toMyroom").click(function () {
    $(".menceng").css("display","none")
});
