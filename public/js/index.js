//fullpage
$(function () {
    $('#index_fullpage').fullpage({
        'verticalCentered': false,
        // 'css3': true,
        'sectionsColor': ['#fff', '#fff', '#242424', '#e2e2e2','#fff','fff'],
        anchors: ['1', '2', '3','4','5','6','7'],
        'recordHistory':true,
        // 'navigation': true,  
        'slidesNavigation':true,
        'slidesNavPosition':'bottom',
        'scrollingSpeed':700,
        'loopHorizontal':true,
        'controlArrowColor':'#88888855',
        'navigationPosition': 'right',
        'navigationTooltips': ['热卖产品', '定制与鼠标', '音响专区', '耳机专区','键盘专区','玩家社区','网点查询'],
        //窗口滚动到某一窗口时触发move.js动画
        afterLoad:function(link,index){
            switch(index){
                case 2:
                    index_number=0;
                    setInterval(numberChange,25)
                break;
                case 4:
                    move('#index_imgFrame img')
                        .set('opacity','1')
                        .set('top','12%')
                        .duration('.3s')
                        .ease('out')
                        .end();
                break;
                case 5:
                    move('#index_moveimg img:first-child')
                        .set('margin-left','-400px')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(2)')
                        .set('margin-left','-300px')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(3)')
                        .set('margin-left','-200px')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(4)')
                        .set('margin-left','-50px')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(5)')
                        .set('margin-left','80px')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(6)')
                        .set('margin-left','150px')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(7)')
                        .set('margin-left','200px')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_textframe')
                        .set('top','70%')
                        .set('opacity','1')
                        .duration('.6s')
                        .ease('out')
                        .end();
                break;
            }
        },
        //窗口离开某一窗口时触发move.js动画
        onLeave:function(index,nextIndex,direction){
            switch(index){
                case 2:
                    // $('#index_degree').html(" ")
                    clearInterval(numberChange)
                    setTimeout(function(){
                        index_number=0;
                    },1000)
                break;
                case 4:
                    move('#index_imgFrame img')
                        .set('opacity','0')
                        .set('top','80%')
                        .duration('.5s')
                        .ease('out')
                        .end();
                break;
                case 5:
                    move('#index_moveimg img:first-child')
                        .set('margin-left','0')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(2)')
                        .set('margin-left','0')    
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(3)')
                        .set('margin-left','0')   
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(4)')
                        .set('margin-left','0')
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(5)')
                        .set('margin-left','0')
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(6)')
                        .set('margin-left','0') 
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_moveimg img:nth-child(7)')
                        .set('margin-left','0')   
                        .duration('.7s')
                        .ease('out')
                        .end();
                    move('#index_textframe')
                        .set('top','100%')
                        .set('opacity','0')        
                        .duration('.6s')
                        .ease('out')
                        .end();
                break;
            }
        }
    })
})
setInterval(function(){
    $.fn.fullpage.moveSlideRight();
 },2000)
//按钮1弹起按下事件
$("button").mousedown(function(){
    $(this).css({"color":"white","background":"#ff5a00"})
}).mouseup(function(){
    $(this).css({"color":"#ff5a00","background":"transparent"})
})
//键盘轮播
var keyTime=0;
setInterval(index_keybordlb,2000)
function index_keybordlb(){
    keyTime++;
    if(keyTime==1){
        $('#index_keyboardlun').css("background","url(./images/index/u432.png)")
    }
    else if(keyTime==2){
        $('#index_keyboardlun').css("background","url(./images/index/u434.png)")
    }
    else if(keyTime==3){
        $('#index_keyboardlun').css("background","url(./images/index/u436.png)")
    }
    else if(keyTime==4){
        $('#index_keyboardlun').css("background","url(./images/index/u430.png)")
    }
    else if(keyTime==5){
        keyTime=0;
    }
}
//数字递增
var index_number=0;
// setInterval(numberChange,50)
function numberChange(){
    if(index_number>=20){
        clearInterval(numberChange);
    }else{
        index_number++
    }
    $('#index_degree').html(index_number+"°")
    
}
//收藏点击动画
// var collectionState=0;
// $('.collection').click(function(){
//     if(collectionState==0){
//         $('.collection').html('&#xe66a;');
//         collectionState++;
//     }else{
//         $('.collection').html('&#xe795;');
//         collectionState=0;
//     }
// })
    

