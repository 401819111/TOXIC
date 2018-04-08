const modal = require('./../modal/modal.js')
module.exports = {

    details(req, res, next) {
        const goods_id = req.query.goods_id
        modal.details(goods_id, function (err, data) {
            res.send(data)
        })
    },
    myInformation(req,res,next){
        let userName=req.query.userName;
        let userSex=req.query.userSex;
        let userBirth=req.query.userBirth;
        let userPhone=req.query.userPhone;
        modal.myInformation(userName,userSex,userBirth,userPhone,function(err,data){
            console.log(data);
        })
    }
}