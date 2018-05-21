//收藏
var  lh_kg=true;
$(".shoucang").on('click',function() {
    if(lh_kg){
        $(this).html("&#xe66a;").css("color"," #ff5a00");
        lh_kg=false;
    }else{
        $(this).html("&#xe795;");
        lh_kg=true;
    }
});
//数量加

$(function(){
 
    $("#shopCar_goods").on("click",$(".add"),function(e){
  var target=e.target

        var t=$(target).parent().find('input[class*=text_box]');
        // console.log(t.val());
        // var num=t.val()
        // num++
        // if(isNaN(t.val())){
        //     t.val(1);
        // }
        // subtotal(1)
    });

   
    //数量减
    $("#shopCar_goods").on("click",$(".min"),function(){
        var t=$(this).parent().find('input[class*=text_box]');
        t.val(parseInt(t.val())-1);
        if(parseInt(t.val())<=0 || isNaN(t.val())){
            t.val(1);
        }
        subtotal(t);
    });
    $('input[class*=text_box]').keyup(function(){
        var t=$(this);
        t.val(parseInt(t.val()));
        if (isNaN(t.val()) || parseInt(t.val()) <= 0) {
            t.val(1);
        }
        if (t.val(parseInt(t.val())) != t.val()) {
            t.val(parseInt(t.val()));
        }
        subtotal(t);
    });

    //小计
    function subtotal(sum){
        var  subtotal=0;
        subtotal=parseFloat(sum.parent("td").siblings("td").children('.price').text())*parseInt(sum.val());
        sum.parent("td").siblings("td").children('.subtotal').html(subtotal.toFixed(2));
        setTotal();
    }
    //总价
    setTotal()
    function setTotal(){
        var s=0;
        console.log($(".min"));
        for (var i=0;i<$(".min").length;i++){

        }
        $("#total").html(s.toFixed(2));
        $("#total").css("font-size","20px","margin-left", "20%","font-weight","800");
    }
    setTotal();

    //全选

    $(".allCheck").click(function () {
        if(this.checked ==  true){
            $('.inputFill').prop('checked', true);
        }else {
            $('.inputFill').prop('checked', false);

        }
        setTotal();
    });


//input 单选
    $(".inputFill").click(function () {
        if(this.checked ==  true){
            $(this).prop('checked', true);
        }else {
            $(this).prop('checked', false);
        }
        setTotal();
    });
});




