
$(function(){
    var h =$(window).height();
    var top=(h-$("#login").height())/2
  $("#login").css("marginTop",top) 	
    $(window).resize(function () {   
    var h =$(window).height();
    var top=(h-$("#login").height())/2
  $("#login").css("marginTop",top) 	
})
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
    $("#signUp-err,#signUp-err2,#signUp-err3").html("")
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
    $("#signUp-err4,#signUp-err5").html("")    
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
var userPwd=0;
var userPwd2=0;
var userNum=0;
var userNum2=0;
var userPhone=0;
var userPhone2=0;
//  正则封装
function checkAll(type,value,id,msg,boolean){ 
     //checkAll函数,type:验证的类型,value:值，id:报错容器id ，msg：提示语  ，boolean：判断
    switch(type)    //判断该类型  
    {  
    case 'Phone':   //如果类型Phone判断  
        if(!(/^1[34578]\d{9}$/.test(value))){   
           $(id).html(msg);
            return userPhone = 0  ,userPhone=0;
        }else{  
            // console.log(boolean);
            $(id).html("");
            return  userPhone = 1  ,userPhone=1
        }  
      break;  
    case 'Email':  
        if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))){   
            $(id).html(msg) ;  
            return  boolean=0  ; 
        }else{  
            $(id).html("");
            return  boolean=1 ;
        }  
      break;  
      case 'Pwd':  
      if(!(/^[a-zA-Z0-9/w]{6,17}$/.test(value))){   
        $(id).html(msg);
        return  userPwd=0  , userPwd2=0  ;    
      }else{  
        $(id).html("");
        return  userPwd=1 , userPwd2=1 ;
 
      }  
    break;  

    case 'name':  
    if(!(/^[a-zA-Z][a-zA-Z0-9]{3,11}$/.test(value))){ 
      $(id).html(msg)  ;
      return  userNum=0, userNum2=0;        
         
    }else{  
      $(id).html("");
      return  userNum=1,userNum2=1; ; 
    }  
  break;  
  }  
    }  

//用户名正则
$("#sign-up-name").on("blur",function(){
    let username=$("#sign-up-name").val();
    checkAll("name",username,$("#signUp-err"),"用户名格式错误，以字母开头的4-12位",'userNum');
})
$("#sign-up-name-back").on("blur",function(){
    let username=$("sign-up-name-back").val();
    checkAll("name",username,$("#signUp-err6"),"用户名格式错误，以字母开头的4-12位",'userNum2');
})

//密码正则判断
$("#sign-up-pwd").on("blur",function(){
    let signUpPwd=$("#sign-up-pwd").val();
    checkAll("Pwd",signUpPwd,$("#signUp-err2"),"密码格式错误,至少为6位",'userPwd');
})
$("#sign-up-NewPwd").on("blur",function(){
    let signUpPwd=$("#sign-up-NewPwd").val();
    checkAll("Pwd",signUpPwd,$("#signUp-err5"),"密码格式错误，至少为6位",'userPwd2');
})

// 手机号码正则
$("#logup-phone").on("blur",function(){
    let signPhone=$("#logup-phone").val();
    checkAll("Phone",signPhone,$("#signUp-err3"),"手机号码格式错误",'userPhone');
    // console.log(userPhone);
})
$("#login-forget-pwd").on("blur",function(){
    let signPhone=$("#login-forget-pwd").val();
    checkAll("Phone",signPhone,$("#signUp-err4"),"手机号码格式错误",'userPhone2');
})



$("#loginBtn").click(()=>{
    const userName=$("#sign-in-name").val();
    const userPwd=$("#sign-in-pwd").val();
    $.ajax({
        url:'/login.14k',
        type:'POST', //GET
        async:true,    //或false,是否异步 
        data:{
            name:userName,
            pwd:userPwd
        },
        success : function(data) {
            if(data.length>0){      
                alert("登陆成功,欢迎您"+data[0].user_account);
                console.log(window.location.href)
                if(window.location.href=='http://localhost:8888/login.html'){
                        location.href = "/index.html"
                                    }
                else if(window.location.href=='http://localhost:8888/PayWays_html.html'){
                    location.href = "/PayWays_html.html"  
                }
                else if(window.location.href=='http://localhost:8888/PayList_js.html'){
                    location.href = "/PayList_js.html"  
                }
                else if(window.location.href=='http://localhost:8888/personal.html'){
                    location.href = "/personal.html"  
                } 
                else if(window.location.href=='http://localhost:8888/ShopCart_html.html'){
                    location.href = "/ShopCart_html.html"  
                }              
                   else if(window.location.href=='http://localhost:8888/diy.html'){
                    location.href = "/diy.html"  
                } 
                
                
            }
          else{
            alert('登陆失败,请检查用户名或密码')
          }
        }
    }) 
})
$("#login-up").click(function (){

    const signUpName=$("#sign-up-name").val();
    const signUpPwd=$("#sign-up-pwd").val();
    const phone=$("#logup-phone").val();
    const code=$("#user-logup-code").val();
    if(phone==""){
        alert("请输入手机号码")
    }else {
        if(code==""){
        alert("请输入验证码 ")
        }
    }
        if( userNum==1&&userPwd==1&&userPhone==1){
            $.ajax({
                url:'/signUp.14k',
                type:'POST', //GET
                async:true,    //或false,是否异步 
                data:{
                    name:signUpName,
                    pwd:signUpPwd,
                    phone:phone,
                    code:code,
                },
                success : function(data) {
                    if(data=="fail"){
                    alert("注册失败,用户名已存在")
                     }
                    if(data=="success"){
                       alert("注册成功！")
                    }
                    if(data=="fail2"){
                        alert("注册失败,请检查您的手机号或验证码")
                         }
                }
            })
        }
});
$("#sendCode").click(()=>{
if(userPhone==1){
    console.log('12315324');
 
        console.log(213)
        const phone=$("#logup-phone").val();
        $.ajax({
            url:'/sendCode.do',
            type:'POST', //GET
            async:true,    //或false,是否异步 
            data:{
                phone:phone
            },
            success : function(data) {
                if(data=="success"){
                alert("发送成功")
                 }
                if(data=="fail"){
                   alert("失败")
                }
            }
        })

}
})



$("#getBack-code").click(()=>{
    const phone=$("#login-forget-pwd").val();
    $.ajax({
        url:'/sendCode.do',
        type:'POST', //GET
        async:true,    //或false,是否异步 
        data:{
            phone:phone
        },
        success : function(data) {
            if(data=="success"){
            alert("发送成功")
             }
            if(data=="fail"){
               alert("失败")
            }
        }
    })
});

$("#login-up-backUser").click(()=>{
const name=$("#sign-up-name-back").val();
const phone=$("#login-forget-pwd").val();
const code=$("#user-back-code").val();
const newPwd=$("#sign-up-NewPwd").val();
    $.ajax({
        url:'/ForgetPwd.do',
        type:'POST', //GET
        async:true,    //或false,是否异步 
        data:{
            name:name,
            code:code,
            phone:phone,
            newPwd:newPwd
        },
        success : function(data) {
            if(data=="success"){
            alert("修改成功")
             }
            if(data=="fail"){
               alert("失败")
            }
            if(data=="err1"){
                alert("用户名不存在，请检查")
            }
            if(data=="fail2"){
                alert("验证码错误")
            }
        }
    })
})


