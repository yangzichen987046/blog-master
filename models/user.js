var mongodb = require('mongodb').Db;
var settings = require('../settings');
var crypto = require('crypto');

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.sex = user.sex;
    this.moblic = user.moblic;
    this.qq =user.qq;
}

module.exports = User;

//储存用户信息
User.prototype.save = function (callback) {
    //要存入数据库的用户文档
    var md5 = crypto.createHash('md5'),
        email_MD5 = md5.update(this.email.toLowerCase()).digest('hex'), //将email转换成小写再编码
        head = "https://www.gravatar.com/avatar/" + email_MD5 + "?s=48";
    var user = {
        name: this.name,
        password: this.password,
        email: this.email,
        sex: this.sex,
        moblic: this.moblic,
        qq: this.qq,
        head: head
    };

    //打开数据库
    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err); //错误返回err信息
        }
        //读取users集合
        db.collection('users', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);	//如果错误返回err
            }
            //将用户的数据插入Users集合
            collection.insert(user, {
                safe: true
            }, function (err, user) {
                db.close();
                if (err) {
                    return callback(err); //如果错误返回err
                }
                callback(null, user[0]); //成功，err为null,并返回存储后的用户文档
            });
        });
    });
};

//读取用户信息
User.get = function (name, callback) {
    //打开数据库

    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err);	//如果错误返回err
        }
        //读取users集合
        db.collection('users', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);	//如果错误，返回err
            }
            //查找用户名name值为name的一个文档
            collection.findOne({
                name: name
            }, function (err, user) {
                db.close();
                if (err) {
                    return callback(err);	//如果错误返回err
                }
                callback(null, user);	//成功，返回查询的用户信息
            });
        });
    });
};



User.update = function(name, password, email,sex,moblic,qq, callback) {
    //打开数据库
    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(1);
        }
        //读取 users 集合
        db.collection('users', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            //更新文章内容
            collection.update({
                "name": name
            }, {
                $set: {password:password,email: email,sex:sex,moblic:moblic,qq:qq,}
            },function (err) {
                db.close();
                if (err) {
                    return callback(3);
                }
                callback(null);
            });
        });
    });
};


//User.getUser = function(callback) {
//    //打开数据库
//    mongodb.connect(settings.url, function (err, db) {
//        if (err) {
//            return callback(err);
//        }
//        //读取 posts 集合
//        db.collection('users', function (err, collection) {
//            if (err) {
//                db.close();
//                return callback(err);
//            }
//            //返回只包含 name、time、title 属性的文档组成的存档数组
//            collection.find({}, {
//                "name": 1,
//                "qq": 1
//            }).sort({
//                time: -1
//            }).toArray(function (err, docs) {
//
//                db.close();
//                if (err) {
//                    return callback(err);
//                }
//                console.log(docs)
//                callback(null, docs);
//            });
//        });
//    });
//};


User.getOne = function(name, callback) {
    //打开数据库
    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err);
        }
        //读取 users 集合
        db.collection('users', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            //根据用户名进行查询
            collection.findOne({
                "name":name
            },function (err, docs) {
                if (err) {
                    db.close();
                    return callback(err);
                }
                console.log(docs.qq)
                callback(null, docs);
            });
        });
    });
};