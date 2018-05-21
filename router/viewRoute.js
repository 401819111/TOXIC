const myexpress = require('express');
const router = myexpress.Router();
const userController = require('./../controller/allContoller.js');

router.get('/personal.html',function(req,res){
    if(req.session.user){
        res.locals.session = req.session;
        user=req.session.user
        res.render('personal')
    }
else{
    res.render('login')  
}
})
router.get('/index.html',function(req,res){
 
    res.locals.session = req.session;
    user=req.session.user
    res.render('index')
})
router.get('/aboutUs.html',function(req,res){
    res.locals.session = req.session;
    user=req.session.user
    res.render('aboutUs')
})
router.get('/diy.html',function(req,res){
    if(req.session.user){
        res.locals.session = req.session;
        user=req.session.user
        res.render('diy')
    }
else{
    res.render('login')  
}
})
router.get('/lh_cpfl.html',function(req,res){
    res.locals.session = req.session;
    user=req.session.user
    res.render('lh_cpfl')
})
router.get('/after_sale.html',function(req,res){
    res.locals.session = req.session;
    user=req.session.user
    res.render('after_sale')
})

router.get('/ShopCart_html.html',function(req,res){
    if(req.session.user){
        res.locals.session = req.session;
        user=req.session.user
        res.render('ShopCart_html')
    }
else{
    res.render('login')  
}
})

router.get('/userShow.html',function(req,res){
    res.locals.session = req.session;
    user=req.session.user
    res.render('userShow')
})
router.get('/Network.html',function(req,res){
    res.locals.session = req.session;
    user=req.session.user
    res.render('Network')
})
router.get('/PayList_html.html',function(req,res){
    if(req.session.user){
        res.locals.session = req.session;
        user=req.session.user
        res.render('PayList_html')
    }
else{
    res.render('login')  
}
})
router.get('/productDetail.html',function(req,res){
    res.locals.session = req.session;
    user=req.session.user
    res.render('productDetail')
})
router.get('/SoftDownload.html',function(req,res){
    res.locals.session = req.session;
    user=req.session.user
    res.render('SoftDownload')
})
router.get('/PayWays_html.html',function(req,res){
    if(req.session.user){
        res.locals.session = req.session;
        user=req.session.user
        res.render('PayWays_html')
    }
else{
    res.render('login')  
}
})

exports.routes=router; //公开