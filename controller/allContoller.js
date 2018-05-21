const modal = require('./../modal/modal.js')
var AV = require('leanengine');
module.exports = {
    //商品详情
    details(req, res, next) {
        let goods_id = req.query.goods_id
        modal.details(goods_id, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.send(data)
            }
        })
    },
    //个人中心
    myInformation(req, res, next) {
        let userId = req.query.userId;
        modal.myInformation(userId, function (err, data) {
            res.send(data)
        })
    },
    user_addinformation(req, res, next) {
        let userId = req.query.userId;
        let nameAdd = req.query.nameAdd;
        let birthAdd = req.query.birthAdd;
        modal.user_addinformation(userId, nameAdd, birthAdd, function (err, data) {
            if (err) {
                res.send('fail')
            } else {
                res.send('ok')
            }
        })
    },
    accountInformation(req, res, next) {
        let userId = req.query.userId;
        let emailUpdate = req.query.emailUpdate;
        let phoneUpdate = req.query.phoneUpdate;
        let oldPassword = req.query.oldPassword;
        let newPassword = req.query.newPassword;
        modal.accountInformation(userId, emailUpdate, phoneUpdate, oldPassword, newPassword, function (err, data) {
            if (err) {
                res.send('fail')
            } else {
                res.send('ok')
            }
        })
    },
    addressGet(req, res, next) {
        let userId = req.query.userId;
        modal.addressGet(userId, function (err, data) {
            res.send(data)
        })
    },
    change_address(req, res, next) {
        let userId = req.query.userId;
        let change_recName = req.query.change_recName;
        let change_recTel = req.query.change_recTel;
        let change_recProvince = req.query.change_recProvince;
        let change_recCity = req.query.change_recCity;
        let change_recCounty = req.query.change_recCounty;
        let change_recDetailed = req.query.change_recDetailed;
        let getAddress_id = req.query.getAddress_id;
        modal.change_address(userId, change_recName, change_recTel, change_recProvince, change_recCity, change_recCounty, change_recDetailed, getAddress_id, function (err, data) {
            if (err) {
                res.send('fail')
            } else {
                res.send('ok')
            }
        })
    },
    add_address(req, res, next) {
        let userId = req.query.userId;
        let add_recName = req.query.add_recName;
        let add_recTel = req.query.add_recTel;
        let add_recProvince = req.query.add_recProvince;
        let add_recCity = req.query.add_recCity;
        let add_recCounty = req.query.add_recCounty;
        let add_recDetailed = req.query.add_recDetailed;
        modal.add_address(userId, add_recName, add_recTel, add_recProvince, add_recCity, add_recCounty, add_recDetailed, function (err, data) {
            if (err) {
                res.send('fail')
            } else {
                res.send('ok')
            }
        })
    },
    address_delete(req, res, next) {
        let userId = req.query.userId;
        let getAddress_id = req.query.getAddress_id;
        modal.address_delete(userId, getAddress_id, function (err, data) {
            if (err) {
                res.send('fail')
            } else {
                res.send('ok')
            }
        })
    },
    default_set(req, res, next) {
        let userId = req.query.userId;
        let getAddress_id = req.query.getAddress_id;
        modal.default_set(userId, getAddress_id, function (err, data) {
            if (err) {
                res.send('fail')
            } else {
                res.send('ok')
            }
        })
    },
    user_order: (req, res, next) => {
        let userId = req.query.userId;
        let li_content = req.query.li_content;
        modal.user_order(userId, li_content, (err, data) => {
            if (data == "") {
                res.send("null")
            } else {
                res.send(data)
            }
        })
    },
    user_collection(req, res, next) {
        let userId = req.query.userId;
        modal.user_collection(userId, function (err, data) {
            res.send(data)
        })
    },
    //登录页
    loginControl: (req, res, next) => {
        const name = req.body.name;
        const pwd = req.body.pwd;
        modal.login(name, pwd, function (err, data) {

            if (data.length > 0) {
                req.session.user = data[0].user_account;
                req.session.id = data[0].user_id;
                res.send(data)
            } else {
                res.send(data)
            }
        })
    },
    signUpControl: (req, res, next) => {
        const name = req.body.name;
        const pwd = req.body.pwd;
        const phone = req.body.phone;
        const code = req.body.code;
        modal.queryUser(name, function (err, data) {
            console.log(data);
            if (data.length > 0) {
                res.send("fail"); // 验证用户名是否存在
            } else {
                modal.signUp(res, name, pwd, phone, code, function (err, data) {
                    if (!err) {
                        res.send("success")
                    }
                })
            }
        })

    },
    //发送短信：
    sendCode: function (req, res) {
        let phone = req.body.phone;
        //3. 配置请求服务，调用AV.Cloud.requestSmsCode()
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: phone,
            name: "项目测试", //进行的服务类型
            op: "美邦", //进行什么操作
            ttl: 2 //验证码过期时间，单位分钟
        }).then(function (data) {
            res.send("success")
        }, function (err) {
            res.send("fail")
        });
    },
    getBackPwd: (req, res, next) => {
        const name = req.body.name;
        const phone = req.body.phone;
        const code = req.body.code;
        const newPwd = req.body.newPwd;
        modal.queryUser(name, function (err, data) { // 验证用户名是否存在
            if (data.length > 0) {
                modal.ForgotPwd(res, name, phone, code, newPwd, (err, data) => {
                    if (!err) {
                        res.send("success");
                    }
                })
            } else {
                res.send("err1")
            }
        })
    },
    GetBackCode: function (req, res) {
        let phone = req.body.phone;
        //3. 配置请求服务，调用AV.Cloud.requestSmsCode()
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: phone,
            name: "找回密码", //进行的服务类型
            op: "美邦", //进行什么操作
            ttl: 10 //验证码过期时间，单位分钟
        }).then(function (data) {
            res.send("success")
        }, function (err) {
            res.send("fail")
        });
    },
    Index: (req, res) => {
        if (req.session.user) {
            res.render('index')
        } else {
            res.redirect('login.html')
        }
    },
    lh_stulist: function (req, res, callback) {
        // const id=req.body.id
        modal.lh_stulist(function (err, data) {
            res.send(data)
        })
    },
    viewFrontImg: function (req, res, next) {
        modal.viewFrontImg(function (err, data) {
            if (data.length > 0) {
                res.send(data);
            } else {}
        })
    },
    //定制页
    custom: function (req, res, next) {
        var custom_price = req.body.custom_price;
        var key_num = req.body.key_num;
        var board_color = req.body.board_color;
        var key_light = req.body.key_light;
        var custom_img = req.body.custom_img;
        var custom_detail = req.body.custom_detail;
        var user_id = req.body.user_id;
        modal.addCustom(custom_price, key_num, board_color, key_light, custom_img, custom_detail, user_id, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.send("ok");
            }
        })
    },
    //加入购物车
    addToTheCar: function (req, res, next) {
        let userId = req.query.user_id;
        let goods_id = req.query.goods_id;
        let car_gdnum = req.query.car_gdnum;
        modal.addToTheCar(userId, goods_id, car_gdnum, function (err, data) {
            if (err) {
                res.send('fail')
            } else {
                res.send('ok')
            }
        })
    },
    //获取用户id
    getUserId: function (req, res, next) {
        let name = req.query.username;
        modal.getUserId(name, function (err, data) {
            if (err) {
                res.send('fail')
            } else {
                res.send(data)
            }
        })
    },
    //购物车
    gerCar: function (req, res, next) {
        var name = req.body.user_id;
        modal.getId(name, (err, data) => {
            var id = data[0].user_id
            modal.getCar(id, function (err, data) {
                console.log(data);
                if (data.length > 0) {
                    res.send(data);
                } else {
                    console.log(err);
                }
            })
        })
    },
    deleteShopCar: function (req, res, next) {
        var name = req.body.user_name;
        var goods_id = req.body.goods_id;
        modal.getId(name, (err, data) => {
            var id = data[0].user_id
            modal.deleteShopCar(goods_id, id, function (err, data) {
                if (data.length > 0) {
                    res.send(data);
                } else {
                    console.log(err);
                }
            })
        })
    },

}