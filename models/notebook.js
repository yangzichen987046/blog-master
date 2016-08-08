var mongodb = require('mongodb').Db;
var settings = require('../settings');

function Notebook(notebook,name,time) {
    this.notebook = notebook;
    this.name = name;
    this.time = time;

}

module.exports = Notebook;
//储存一条留言信息
Notebook.prototype.save = function (callback) {
    var time =parseInt(new Date().getTime()/1000).toString();
    //存储各种时间格式，方便以后扩展


    var notebook = {
        notebook: this.notebook,
        name: this.name,
        time: time
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
            //将文档插入 posts 集合
            collection.insert(notebook, {
                safe: true
            }, function (err) {
                db.close();
                if (err) {
                    return callback(err);//失败！返回 err
                }
                callback(null);//返回 err 为 null
            });
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
                time: -1
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
