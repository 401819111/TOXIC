const myexpress = require('express');
const router = myexpress.Router();
const userController = require('./../controller/allContoller.js');

router.get('/personal.html',function(req,res){
    res.render('personal')
})
// router.get("/studentList.html",userController.studentList)
exports.routes=router; //公开