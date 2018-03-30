// 鼠标移入移出显示、隐藏menu
$("nav").mouseover(function(){
    $('#header_hiddenFrame').css("margin-top","0");
})
$("nav").mouseout(function(){
    $('#header_hiddenFrame').css("margin-top","-40px");
})
//鼠标移入搜索框弹出
$("#header_searchIcon").mouseover(function(){
    $('#header_search').css({
        "left":"12px"
    });
})
$("#header_search").blur(function(){
    $('#header_search').css({
        "left":"200px"
    });
})
$(document).scroll(function(){
    var header_fromTop=$(document).scrollTop();
    console.log(header_fromTop);
    if(header_fromTop>=500){
        $("nav").css("opacity",".8")
    }
    else{
        $("nav").css("opacity","1")
    }
})