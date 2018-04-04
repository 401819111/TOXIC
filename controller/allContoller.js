const modal =require('./../modal/modal.js')
module.exports={

    details(req,res,next){
    const goods_id=req.query.goods_id
        console.log(goods_id);

        modal.details(goods_id,function(err,data){

            console.log(data);
            res.send(data)
    })
}
}