$("#center-user ul li").click(function(){
    var index=$(this).index()
    if(index==0){
        $("#center-user-div2").css("display","block")                                
        $("#user-Order").css("display","none")
        $("#user-Order-DIY").css("display","none")
        $(".user-collect").css("display","none")
        $("#user-location").css("display","none")
    }
    if(index==1){
        $("#user-Order").css("display","block")                        
        $("#center-user-div2").css("display","none")
        $("#user-Order-DIY").css("display","none")
        $(".user-collect").css("display","none")
        $("#user-location").css("display","none")
    }
    if(index==2){
        $("#user-Order-DIY").css("display","block")                
        $("#center-user-div2").css("display","none")
        $("#user-Orde").css("display","none")
        $(".user-collect").css("display","none")
        $("#user-location").css("display","none")
    }
    if(index==3){
        $(".user-collect").css("display","block")        
        $("#center-user-div2").css("display","none")
        $("#user-Orde").css("display","none")
        $("#user-Order-DIY").css("display","none")
        $("#user-location").css("display","none")
    }

    if(index==4){
        $("#user-location").css("display","block")
        $("#center-user-div2").css("display","none")
        $("#user-Orde").css("display","none")
        $("#user-Order-DIY").css("display","none")
        $(".user-collect").css("display","none")
    }

})
$(function(){
    var phone=$("#user-center-phone").html()
    var name=$("#user-center-name").html()
    var email=$("#user-center-email").html()
    $("#user-center-change-phone input").attr("placeholder",phone)
    $("#user-center-change-name input").attr("placeholder",name)
    $("#user-center-change-email input").attr("placeholder",email)
})
$("#user-center-img-change").hover(()=>{
    $("#user-center-img-change div").css("display","block")
},()=>{
    $("#user-center-img-change div").css("display","none")
})

$("#center-user ul li").click(function(){
    var index=$(this).index()

        $(this).addClass("user-center-li-bgcolor")
        $("#center-user ul li").each(function(){
            $("#center-user ul li").not($("#center-user ul li").eq(index)).removeClass("user-center-li-bgcolor")
            
        })
})