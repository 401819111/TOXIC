

function getAjax(obj){
    var XMLHttp;
    if(window.XMLHttpRequest){
        XMLHttp=new XMLHttpRequest()
    }
    else if(window.ActiveXObject){ //ie
        XMLHttp= new ActiveXObject("Microsoft.XMLHTTP")
    }
    
    
    // 2.设置回调
    XMLHttp.onreadystatechange=function(){
        if(XMLHttp.readyState==4 && XMLHttp.status==200){
           obj.callback(XMLHttp);
        }
       
    }
        for (var key in obj.data) {  
            arr.push(key + '=' + obj.data[key])  
        }  
    if(obj.data.length>0){
        obj.url =obj.url +"?"+ obj.data ;
        obj.data = arr.join('&')
    }
    ajax.open(obj.data,obj.url)
        ajax.send(null)
}
