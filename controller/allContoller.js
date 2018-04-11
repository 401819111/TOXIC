const modal = require('./../modal/modal.js')
module.exports = {

    details(req, res, next) {
        const goods_id = req.query.goods_id
        modal.details(goods_id, function (err, data) {
            res.send(data)
        })
    },
    myInformation(req,res,next){
        let userId=req.query.userId;
        modal.myInformation(userId,function(err,data){
            res.send(data)
        })
    },
    user_addinformation(req,res,next){
        let userId=req.query.userId;
        let nameAdd=req.query.nameAdd;
        let birthAdd=req.query.birthAdd;
        modal.user_addinformation(userId,nameAdd,birthAdd,function(err,data){
           if(err){
               res.send('fail')
           }
           else{
            res.send('ok')
           }
        })
    },
    accountInformation(req,res,next){
        let userId=req.query.userId;
        let emailUpdate=req.query.emailUpdate;
        let phoneUpdate=req.query.phoneUpdate;
        let oldPassword=req.query.oldPassword;
        let newPassword=req.query.newPassword;
        modal.accountInformation(userId,emailUpdate,phoneUpdate,oldPassword,newPassword,function(err,data){
            if(err){
                res.send('fail')
            }
            else{
             res.send('ok')
            }
         })
    },
    addressGet(req,res,next){
        let userId=req.query.userId;
        modal.addressGet(userId,function(err,data){
            res.send(data)
        })
    },
    change_address(req,res,next){
        let userId=req.query.userId;
        let change_recName=req.query.change_recName;
        let change_recTel=req.query.change_recTel;
        let change_recProvince=req.query.change_recProvince;
        let change_recCity=req.query.change_recCity;
        let change_recCounty=req.query.change_recCounty;
        let change_recDetailed=req.query.change_recDetailed;
        let getAddress_id=req.query.getAddress_id;
        modal.change_address(userId,change_recName,change_recTel,change_recProvince,change_recCity,change_recCounty,change_recDetailed,getAddress_id,function(err,data){
            if(err){
                // console.log(err)
                res.send('fail')
            }
            else{
                res.send('ok')
            }
         })
    },
    add_address(req,res,next){
        let userId=req.query.userId;
        let add_recName=req.query.add_recName;
        let add_recTel=req.query.add_recTel;
        let add_recProvince=req.query.add_recProvince;
        let add_recCity=req.query.add_recCity;
        let add_recCounty=req.query.add_recCounty;
        let add_recDetailed=req.query.add_recDetailed;
        modal.add_address(userId,add_recName,add_recTel,add_recProvince,add_recCity,add_recCounty,add_recDetailed,function(err,data){
            if(err){
                res.send('fail')
            }
            else{
                res.send('ok')
            }
         })
    },
    address_delete(req,res,next){
        let userId=req.query.userId;
        let getAddress_id=req.query.getAddress_id;
        modal.address_delete(userId,getAddress_id,function(err,data){
            if(err){
                res.send('fail')
            }
            else{
                res.send('ok')
            }
         })
    },
    default_set(req,res,next){
        let userId=req.query.userId;
        let getAddress_id=req.query.getAddress_id;
        modal.default_set(userId,getAddress_id,function(err,data){
            if(err){
                // console.log(err)
                res.send('fail')
            }
            else{
                res.send('ok')
            }
         })
    },
    user_order:(req,res,next)=>{
        let userId=req.query.userId;
        let li_content=req.query.li_content;
        modal.user_order(userId,li_content,(err,data)=>{
            if(data==""){
                res.send("null")
            }
            else{
                res.send(data)
            }
        })
    },
    user_collection(req,res,next){
        let userId=req.query.userId;
        console.log(userId)
        modal.user_collection(userId,function(err,data){
            console.log(data)
            res.send(data)
         })
    },
}