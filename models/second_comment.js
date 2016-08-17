var mongodb = require('mongodb').Db;
var settings = require('../settings');
var ObjectID = require('mongodb').ObjectID;

function Comment(id, comment) {
    this.id = id;
    this.comment = comment;
    this.parent_id=comment.parent_id
}

module.exports = Comment;
//储存一条留言信息
Comment.prototype.save = function (callback) {
    var id = this.id,
        comment = this.comment,
        parent_id=this.parent_id;
    //打开数据库
    mongodb.connect(settings.url, function (err, db) {
        if (err) {
            return callback(err);
        }
        console.log(1111,comment.time)
        var second_comment='"comments.'+parent_id+'.second_comment"'
        console.log(1111,second_comment)
        //读取posts集合
        db.collection('posts', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            //通过用户名，时间，以及标题查找文档，并把一条留言对象添加到该文档的conmments数组里去
            collection.update({
                "_id": ObjectID(id),
                "comments.name": comment.data_name,
                "comments.time": comment.data_time
            }, {
                $push: {"comments.$.second_comment": comment}
            }, function (err) {
                db.close();

                if (err) {
                    return callback(err);
                }
                callback(null);
            });
        });
    });
}