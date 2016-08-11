var mongodb = require('mongodb').Db;
var settings = require('../settings');

function Notebook(notebook,name,time,seq) {
    this.notebook = notebook;
    this.name = name;
    this.time = time;
    this.seq = seq;
}

module.exports = Notebook;



//储存一条留言信息
Notebook.prototype.save = function (callback) {
    var time =parseInt(new Date().getTime()/1000).toString();
    //存储各种时间格式，方便以后扩展


    var notebook = {
        notebook: this.notebook,
        name: this.name,
        time: time,
    };


    //打开数据库
    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err);
        }
        //读取 posts 集合


        db.collection('notebooks', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }


            collection.findAndModify(
                { "name": notebook.name },
                [],
                { "$inc": { "seq": 1 }},
                {upsert: true, new: true },
                function (err,doc) {

                    if (err) {
                        console.log(err)
                        console.log("xx")
                        return callback(err);//失败！返回 err
                    }
                    console.log(doc.seq)

                    if(notebook.name){
                        collection.insert({
                            notebook:notebook.notebook,
                            name:notebook.name,
                            time:notebook.time,
                            seq:doc.seq
                        }, function (err) {
                            db.close();
                            if (err) {
                                return callback(err);//失败！返回 err
                            }
                            callback(null);//返回 err 为 null
                        });
                    }

                });







            //将文档插入 posts 集合
            //collection.insert(notebook, {
            //    safe: true
            //}, function (err) {
            //    db.close();
            //    if (err) {
            //        return callback(err);//失败！返回 err
            //    }
            //    callback(null);//返回 err 为 null
            //})



        });
    });
}


Notebook.getNotebook = function(name,callback) {
    //打开数据库
    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err);
        }
        //读取 posts 集合
        db.collection('notebooks', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            //返回只包含 name、time、title 属性的文档组成的存档数组
            collection.find({
                "name": name
            }, {
                "name": 1,
                "time": 1,
                "notebook": 1
            }).sort({
                seq: 1
            }).toArray(function (err, docs) {
                db.close();
                if (err) {
                    return callback(err);
                }

                callback(null, docs);
            });
        });
    });
};

Notebook.remove_notebook_id = function(name,time, callback) {
    //打开数据库

    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err);
        }
        //读取 posts 集合
        db.collection('notebooks', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }


            //删除转载来的文章所在的文档
            collection.remove({
                "name": name,
                "time": time,
            }, {
                w: 1
            }, function (err) {
                db.close();
                if (err) {
                    return callback(err);
                }
                callback(null);
            });
        });
    });
};


Notebook.updata_notebook_name = function(name, time,notebook , callback) {
    //打开数据库
    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err);
        }
        //读取 posts 集合
        db.collection('notebooks', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            //更新文章内容
            collection.update({
                "name": name,
                "time": time
            }, {
                $set: {notebook: notebook}
            }, function (err) {
                db.close();
                if (err) {
                    return callback(err);
                }
                callback(null);
            });

        });

    });
};




Notebook.updata_seq = function(name, data , callback) {
    //打开数据库


    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err);
        }
        //读取 posts 集合
        db.collection('notebooks', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            var array = eval(data)


            //删除转载来的文章所在的文档


            for (var i = 0; i <array.length; i++) {
                collection.update({
                    "name": name,
                    "time": array[i].id
                }, {
                    $set: {seq: array[i].seq}
                }, function (err) {

                    //db.close();
                    if (err) {

                        return callback(err);
                    }

                     //callback(null);
                });
            }


            callback(null);
        });




    });





};