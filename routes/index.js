var formidable = require('formidable');
var crypto = require('crypto'),
    fs = require('fs'),
    User = require('../models/user.js'),
    Post = require('../models/post.js'),
    Comment = require('../models/comment.js');
    Second_Comment = require('../models/second_comment.js');
    Notebook = require('../models/notebook.js');
var Geetest = require('../gt-sdk');



module.exports = function(app) {
    app.get('/', function (req, res) {
        //判断是否是第一页，并把请求的页数转换成 number 类型
        var page = req.query.p ? parseInt(req.query.p) : 1;
        //查询并返回第 page 页的 10 篇文章
        Post.getTen(null, page, function (err, posts, total) {
            if (err) {
                posts = [];
            }

            res.render('index', {
                title: '主页',
                posts: posts,
                page: page,
                isFirstPage: (page - 1) == 0,
                isLastPage: ((page - 1) * 10 + posts.length) == total,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });




    var pcGeetest = new Geetest({
        privateKey: 'af1d53486ab74097189e3e38989f54e6',
        publicKey: 'b843d5acde6d275aacc074f359facd8a'
    });
    app.get("/pc-geetest/register", function (req, res) {

        // 向极验申请一次验证所需的challenge
        pcGeetest.register(function (data) {
            res.send(JSON.stringify({
                gt: pcGeetest.publicKey,
                challenge: data.challenge,
                success: data.success
            }));
        });
    });




    app.get('/reg', checkNotLogin);
    app.get('/reg', function (req, res) {
        res.render('reg', {
            title: '注册',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

    app.post('/reg', checkNotLogin);
    app.post('/reg', function (req, res) {
        var name = req.body.name,
            password = req.body.password,
            password_re = req.body['password-repeat'];
        //检验用户两次输入的密码是否一致
        if (password_re != password) {
            req.flash('error', '两次输入的密码不一致!');
            return res.redirect('/reg');//返回主册页
        }
        //生成密码的 md5 值
        var md5 = crypto.createHash('md5'),
            password = md5.update(req.body.password).digest('hex');
        var newUser = new User({
            name: req.body.name,
            password: password,
            email: req.body.email
        });
        //检查用户名是否已经存在
        User.get(newUser.name, function (err, user) {
            if (user) {
                req.flash('error', '用户已存在!');
                return res.redirect('/reg');//返回注册页
            }
            //如果不存在则新增用户
            newUser.save(function (err, user) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/reg');//注册失败返回主册页
                }
                req.session.user = user;//用户信息存入 session
                req.flash('success', '注册成功!');
                res.redirect('/');//注册成功后返回主页
            });
        });
    });

    app.get('/login', checkNotLogin);
    app.get('/login', function (req, res) {


        res.render('login', {
            title: '登录',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

    app.post('/login', checkNotLogin);
    app.post('/login', function (req, res) {





        //生成密码的 md5 值
        var md5 = crypto.createHash('md5'),
            password = md5.update(req.body.password).digest('hex');
        //检查用户是否存在
        User.get(req.body.name, function (err, user) {
            if (!user) {
                req.flash('error', '用户不存在!');
                return res.redirect('/login');//用户不存在则跳转到登录页
            }
            //检查密码是否一致
            if (user.password != password) {
                req.flash('error', '密码错误!');
                return res.redirect('/login');//密码错误则跳转到登录页
            }
            //用户名密码都匹配后，将用户信息存入 session
            req.session.user = user;
            req.flash('success', '登陆成功!');
            res.redirect('/');//登陆成功后跳转到主页
        });
    });

    app.get('/post', checkLogin);
    app.get('/post', function (req, res) {
        var currentUser = req.session.user
        var notebook_id=req.params.notebook_id
        Notebook.getNotebook(currentUser.name, function (err,notebook_all) {

            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
                    //res.render('post', {
                    //    title: '存档',
                    //    user: req.session.user,
                    //    notebook_all:notebook_all,
                    //    success: req.flash('success').toString(),
                    //    error: req.flash('error').toString()
                    //
                    //});
            Post.getAll(currentUser.name,notebook_id, function (err, posts) {
                if(req.session.user==null){

                }else{
                    if (err) {
                        req.flash('error', err);
                        return res.redirect('/');
                    }
                    res.render('post', {
                        title: '存档',
                        posts: posts,
                        notebook_all:notebook_all,
                        notebook_id:notebook_id,
                        user: req.session.user,
                        success: req.flash('success').toString(),
                        error: req.flash('error').toString()

                    });
                }
            });




        });
    });


    app.post('/post', checkLogin);
    app.post('/post', function (req, res) {

        var currentUser = req.session.user,
            tags = [req.body.tag1, req.body.tag2, req.body.tag3],
            img =req.body.img,
        //context_length=req.body.post.length,
            notebook_id=req.body.notebook_id,
            notebook=req.body.notebook

        if(notebook){
            notebook = new Notebook(notebook,currentUser.name);

            notebook.save(function (err) {

                if (err) {
                    req.flash('error', err);
                    return res.redirect('/');
                }
                req.flash('success', '发布成功!');
                res.redirect('/post');//发表成功跳转到主页
            });
        }else{
            post = new Post(currentUser.name, currentUser.head, req.body.title, tags,img, req.body.post,notebook_id);

            post.save(function (err) {
                console.log(notebook_id,11)
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/');
                }
                req.flash('success', '发布成功!');
                res.redirect('/post');//发表成功跳转到主页
            });
        }

    });



    app.delete('/post/:notebook_id', checkLogin);
    app.delete('/post/:notebook_id',function(req,res){
        var currentUser = req.session.user;
        var notebook_id=req.params.notebook_id;

        Post.remove_notebook_id(currentUser.name, notebook_id, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            Notebook.remove_notebook_id(currentUser.name, notebook_id, function (err) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('back');
                }
            req.flash('success', '删除成功!');
            res.redirect('/');
            });
        });
    });



    app.put('/post/:notebook_id', checkLogin);
    app.put('/post/:notebook_id',function(req,res){
        var currentUser = req.session.user;
        var notebook_id=req.params.notebook_id;
        var notebook_name=req.body.notebook_name;
        Notebook.updata_notebook_name(currentUser.name, notebook_id,notebook_name, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            req.flash('success', '修改成功!');
            res.redirect('/');
        });
    });


    app.put('/post', checkLogin);
    app.put('/post',function(req,res){
        var currentUser = req.session.user;
        var data=req.body.data;

        Notebook.updata_seq(currentUser.name,data,  function (err) {
            if (err) {
                console.log("xxx")
                req.flash('error', err);
                return res.redirect('back');
            }

            res.redirect('/');
        });


    });



    app.get('/post/:notebook_id', checkLogin);
    app.get('/post/:notebook_id', function (req, res) {
        var currentUser = req.session.user
        var notebook_id=req.params.notebook_id
        var title=req.params.title
        Notebook.getNotebook(currentUser.name, function (err,notebook_all) {

            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            Post.getAll(currentUser.name,notebook_id, function (err, posts) {
                if(req.session.user==null){

                }else{
                    if (err) {
                        req.flash('error', err);
                        return res.redirect('/');
                    }
                    res.render('post', {
                        title: '存档',
                        posts: posts,
                        notebook_all:notebook_all,
                        notebook_id:notebook_id,
                        title:title,
                        user: req.session.user,
                        success: req.flash('success').toString(),
                        error: req.flash('error').toString()

                    });
                }
            });




        });
    });


    app.post('/post/:notebook_id', checkLogin);
    app.post('/post/:notebook_id', function (req, res) {

        var currentUser = req.session.user,
            tags = [req.body.tag1, req.body.tag2, req.body.tag3],
            img =req.body.img,
        //context_length=req.body.post.length,
            notebook_id=req.body.notebook_id,
            notebook=req.body.notebook

        if(notebook){
            notebook = new Notebook(notebook,currentUser.name);

            notebook.save(function (err) {

                if (err) {
                    req.flash('error', err);
                    return res.redirect('/');
                }
                req.flash('success', '发布成功!');
                res.redirect('/post');//发表成功跳转到主页
            });
        }else{
            post = new Post(currentUser.name, currentUser.head, req.body.title, tags,img, req.body.post,notebook_id);

            post.save(function (err) {
                console.log(notebook_id,11)
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/');
                }
                req.flash('success', '发布成功!');
                res.redirect('/post');//发表成功跳转到主页
            });
        }

    });

    app.get('/post/:notebook_id/:id', checkLogin);
    app.get('/post/:notebook_id/:id', function (req, res) {
        var currentUser = req.session.user
        var notebook_id=req.params.notebook_id
        Notebook.getNotebook(currentUser.name, function (err,notebook_all) {

            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            Post.getAll(currentUser.name,notebook_id, function (err, posts) {
                if(req.session.user==null){
                }else{
                    if (err) {
                        req.flash('error', err);
                        return res.redirect('/');
                    }

                    Post.edit(req.params.id, function (err, post) {
                        if (err) {
                            req.flash('error', err);
                            return res.redirect('back');
                        }
                    res.render('post', {
                        title: '存档',
                        posts: posts,
                        post:post,
                        notebook_all:notebook_all,
                        notebook_id:notebook_id,
                        user: req.session.user,
                        success: req.flash('success').toString(),
                        error: req.flash('error').toString()

                    });
                    });
                }
            });




        });
    });


    app.post('/post/:notebook_id/:id', checkLogin);
    app.post('/post/:notebook_id/:id', function (req, res) {
        var currentUser = req.session.user;
        var notebook=req.body.notebook;
        var notebook_title=req.body.title

        if(notebook){
            notebook = new Notebook(notebook,currentUser.name);

            notebook.save(function (err) {

                if (err) {
                    req.flash('error', err);
                    return res.redirect('/');
                }
                req.flash('success', '发布成功!');
                res.redirect('/post');//发表成功跳转到主页
            });
        }else {
            Post.update(req.params.id, req.body.post,notebook_title, function (err) {
                var url = encodeURI('/');
                if (err) {
                    req.flash('error', err);
                    return res.redirect(url);//出错！返回文章页
                }
                req.flash('success', '修改成功!');
                res.redirect(url);//成功！返回文章页
            });
        }
    });








    app.get('/logout', checkLogin);
    app.get('/logout', function (req, res) {
        req.session.user = null;
        req.flash('success', '登出成功!');
        res.redirect('/');//登出成功后跳转到主页
    });

    app.get('/upload', checkLogin);
    app.get('/upload', function (req, res) {
        res.render('upload', {
            title: '文件上传',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

    app.post('/upload', checkLogin);
    app.post('/upload', function (req, res) {

        req.flash('success', '文件上传成功!');
        res.redirect('/upload');
    });

    app.get('/archive', function (req, res) {
        Post.getArchive(function (err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('archive', {
                title: '存档',
                posts: posts,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    app.get('/tags', function (req, res) {
        Post.getTags(function (err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('tags', {
                title: '标签',
                posts: posts,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    app.get('/tags/:tag', function (req, res) {
        Post.getTag(req.params.tag, function (err, posts) {
            if (err) {
                req.flash('error',err);
                return res.redirect('/');
            }
            res.render('tag', {
                title: 'TAG:' + req.params.tag,
                posts: posts,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    app.get('/links', function (req, res) {
        res.render('links', {
            title: '友情链接',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

    app.get('/search', function (req, res) {
        Post.search(req.query.keyword, function (err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('search', {
                title: "SEARCH:" + req.query.keyword,
                posts: posts,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });

    //app.get('/u/:name', function (req, res) {
    //    var page = req.query.p ? parseInt(req.query.p) : 1;
    //    //检查用户是否存在
    //    User.get(req.params.name, function (err, user) {
    //        if (err) {
    //            req.flash('error', err);
    //            return res.redirect('/');
    //        }
    //        if (!user) {
    //            req.flash('error', '用户不存在!');
    //            return res.redirect('/');
    //        }
    //        //查询并返回该用户第 page 页的 10 篇文章
    //        Post.getTen(user.name, page, function (err, posts, total) {
    //            if (err) {
    //                req.flash('error', err);
    //                return res.redirect('/');
    //            }
    //            res.render('user', {
    //                title: user.name,
    //                posts: posts,
    //                page: page,
    //                isFirstPage: (page - 1) == 0,
    //                isLastPage: ((page - 1) * 10 + posts.length) == total,
    //                user: req.session.user,
    //                success: req.flash('success').toString(),
    //                error: req.flash('error').toString()
    //            });
    //        });
    //    });
    //});
    app.get('/u/:id', checkLogin);
    app.get('/u/:id', function (req, res) {
        var currentUser = req.session.user;
        if(req.session.user){
            Post.getOne_id(req.params.id, function (err, post) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/');
                }
                var first_comment=post.comments.length
                var second_comment=0;
                for(var i=0;i<post.comments.length;i++){
                    if(post.comments[i].second_comment){
                        second_comment=second_comment+post.comments[i].second_comment.length
                    }
                }
                comment=first_comment+second_comment


                Post.has_like(req.params.id,currentUser.name, function (err, like) {
                    if (err) {
                        req.flash('error', err);
                        return res.redirect('/');
                    }
                    User.has_attention(post.name,currentUser.name, function (err, attention) {
                        if (err) {
                            req.flash('error', err);
                            return res.redirect('/');
                        }
                        res.render('article', {
                            title: req.params.title,
                            post: post,
                            like:like,
                            attention:attention,
                            comment:comment,
                            user: req.session.user,
                            success: req.flash('success').toString(),
                            error: req.flash('error').toString()
                        });
                    });
                });
            });
        }

    });



    app.get('/u/order/desc/like/:id', function (req,res) {


        Post.comment_desc(req.params.id, function (err, comment_desc) {

            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            //console.log(comment_desc.length)
            //console.log(comment_desc[0])


            res.send(comment_desc)
        });
    });

    app.get('/u/order/asc/like/:id', function (req,res) {


        Post.comment_asc(req.params.id, function (err, comment_desc) {

            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            //console.log(comment_desc.length)
            //console.log(comment_desc[0])


            res.send(comment_desc)
        });
    });

    app.post('/u/order/asc/more/like/:id', function (req,res) {

        var comment_num = req.body.comment_num

        Post.comment_asc_more(req.params.id,comment_num, function (err, comment_desc) {

            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            //console.log(comment_desc.length)
            //console.log(comment_desc[0])


            res.send(comment_desc)
        });
    });

    app.post('/u/order/desc/more/like/:id', function (req,res) {

        var comment_num = req.body.comment_num

        Post.comment_desc_more(req.params.id,comment_num, function (err, comment_desc) {

            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            //console.log(comment_desc.length)
            //console.log(comment_desc[0])


            res.send(comment_desc)
        });
    });




    app.post('/u/detail/like/:id', function (req,res) {


        Post.like_detail(req.params.id, function (err, like_detail) {

            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            //console.log(comment_desc.length)
            //console.log(comment_desc[0])

            res.send(like_detail)
        });
    });



    app.get('/u/:name/:day/:title', function (req, res) {
        Post.getOne(req.params.name, req.params.day, req.params.title, function (err, post) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }

            res.render('article', {
                title: req.params.title,
                post: post,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });



    app.post('/u/remove_attention',function(req,res){
        var author = req.body.author
        var currentUser = req.session.user


        User.remove_attention(author, currentUser.name, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }

        });
    })






    app.post('/u/add_attention',function(req,res){
        var author = req.body.author
        var currentUser = req.session.user
        var date = new Date(),
            time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
                date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+":"+(date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        var attention = {
            name: currentUser.name,
            time: time,
        };

        //console.log(attention)

        User.add_attention(author, attention, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }

        });
    })















    app.post('/delete/like/:id', function (req, res) {
        var currentUser = req.session.user;
        var author_name=req.body.author_name;
        var date = new Date(),
            time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
                date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+":"+(date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        var like = {
            name: currentUser.name,
            time: time,
        };


        Post.delete_like(req.params.id, like, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
        });

        User.delete_like(author_name, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.send("1");


        });
    });


    app.post('/get/like/:id', function (req, res) {
        var author_name=req.body.author_name;


        User.like(author_name, function (err,user) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.send(user);

        });
    });



    app.post('/like/:id', function (req, res) {
        var currentUser = req.session.user;
        var author_name=req.body.author_name;

        console.log(2)
        var date = new Date(),
            time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
                date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+":"+(date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        var like = {
            name: currentUser.name,
            time: time,
        };

        Post.like(req.params.id, like, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }

        });
        User.add_like(author_name, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.send("1");
        });
    });

    app.post('/u/:id', function (req, res) {
        var date = new Date(),
            time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
                date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())+":"+(date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        var md5 = crypto.createHash('md5'),
            email_MD5 = md5.update(req.body.email.toLowerCase()).digest('hex'),
            head = "http://www.gravatar.com/avatar/" + email_MD5 + "?s=48";
        var currentUser = req.session.user;
        var comment = {
            data_name: req.body.data_name,
            data_time: req.body.data_time,
            name: currentUser.name,
            head: head,
            email: req.body.email,
            website: req.body.website,
            time: time,
            content: req.body.content
        };

        if(comment.data_name==null){
            var newComment = new Comment(req.params.id, comment);
            newComment.save(function (err) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('back');
                }
                req.flash('success', '留言成功!');
                res.redirect('back');
            });
        }else{
            var newComment = new Second_Comment(req.params.id, comment);
            newComment.save(function (err) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('back');
                }
                req.flash('success', '留言成功!!');
                res.redirect('back');
            });
        }

    });

    app.get('/edit/:notebook_id/:name/:day/:title', checkLogin);
    app.get('/edit/:notebook_id/:name/:day/:title', function (req, res) {
        var currentUser = req.session.user;
        Post.getPost(currentUser.name, function (err, post_all) {

            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            Post.edit(currentUser.name, req.params.day, req.params.title, function (err, post) {
            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            Post.getAll(req.session.user, req.params.notebook_name,function (err, posts) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/');
                }


            res.render('edit', {
                title: '编辑',
                post: post,
                posts: posts,
                post_all:post_all,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
            });
        });

        });
    });

    app.post('/edit/:notebook_name/:name/:day/:title', checkLogin);
    app.post('/edit/:notebook_name/:name/:day/:title', function (req, res) {
        var currentUser = req.session.user;
        context_length=req.body.post.length
        Post.update(currentUser.name, req.params.day, req.params.title, req.body.post,context_length, function (err) {
            var url = encodeURI('/u/' + req.params.name + '/' + req.params.day + '/' + req.params.title);
            if (err) {
                req.flash('error', err);
                return res.redirect(url);//出错！返回文章页
            }
            req.flash('success', '修改成功!');
            res.redirect(url);//成功！返回文章页
        });
    });

    app.get('/remove/:name/:day/:title', checkLogin);
    app.get('/remove/:name/:day/:title', function (req, res) {
        var currentUser = req.session.user;
        Post.remove(currentUser.name, req.params.day, req.params.title, function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            req.flash('success', '删除成功!');
            res.redirect('/');
        });
    });

    app.get('/reprint/:name/:day/:title', checkLogin);
    app.get('/reprint/:name/:day/:title', function (req, res) {
        Post.edit(req.params.name, req.params.day, req.params.title, function (err, post) {
            if (err) {
                req.flash('error', err);
                return res.redirect('back');
            }
            var currentUser = req.session.user,
                reprint_from = {name: post.name, day: post.time.day, title: post.title},
                reprint_to = {name: currentUser.name, head: currentUser.head};
            Post.reprint(reprint_from, reprint_to, function (err, post) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('back');
                }
                req.flash('success', '转载成功!');
                var url = encodeURI('/u/' + post.name + '/' + post.time.day + '/' + post.title);
                res.redirect(url);
            });
        });
    });





    app.get('/peo', function (req, res) {
        //res.render('peo', {
        //    title: '个人信息',
        //    user: req.session.user,
        //    success: req.flash('success').toString(),
        //    error: req.flash('error').toString()
        //});



        //User.getUser(function (err, users) {
        //    if (err) {
        //        req.flash('error', err);
        //        return res.redirect('/');
        //    }
        //    res.render('peo', {
        //        title: '个人信息',
        //        users: users,
        //        user: req.session.user,
        //        success: req.flash('success').toString(),
        //        error: req.flash('error').toString()
        //    });
        //});


        User.getOne(req.session.user.name, function (err, users) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('peo', {
                title: '个人信息',
                users: users,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });
    app.post('/peo', function (req, res) {
        //var ssUser = req.session.user;
        //User.update(ssUser.name,req.body.password, req.body.email, function (err) {
        //
        //    if (err) {
        //        req.flash('error', err);
        //       console.log("chucuo")
        //    }
        //    req.flash('success', '修改成功!');
        //
        //});



        var password = req.body.password,
            password_re = req.body['password-repeat'],
            email = req.body.email,
            sex = req.body.sex,
            moblic = req.body.moblic,
            qq = req.body.qq;
        //检验用户两次输入的密码是否一致
        if (password_re != password) {
            req.flash('error', '两次输入的密码不一致!');
            return res.redirect('/reg');//返回主册页
        }
        //生成密码的 md5 值
        var md5 = crypto.createHash('md5'),
            password = md5.update(req.body.password).digest('hex');
        //检查用户名是否已经存在
        var ssUser = req.session.user;
        User.update(ssUser.name,password,email,sex,moblic,qq, function (err) {
            if (err) {
                        req.flash('error', err);
                       console.log(err)
                        console.log(5)
                    }
                    req.flash('success', '修改成功!');
                    return res.redirect('/');
        });
    });

    app.get('/news', function (req, res) {
        //判断是否是第一页，并把请求的页数转换成 number 类型
        var page = req.query.p ? parseInt(req.query.p) : 1;
        //查询并返回第 page 页的 10 篇文章
        Post.getTen(null, page, function (err, posts, total) {
            if (err) {
                posts = [];
            }
            res.render('news', {
                title: '主页',
                posts: posts,
                page: page,
                isFirstPage: (page - 1) == 0,
                isLastPage: ((page - 1) * 10 + posts.length) == total,
                user: req.session.user,
                success: req.flash('success').toString(),
                error: req.flash('error').toString()
            });
        });
    });


    app.get('/test', function(req, res, next) {
        res.render('test', { title: '图片上传' });
    });
    app.post('/uploadImg', function(req, res, next) {
        var form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.uploadDir =  './public/upload';
        console.log("-----------------------------------------")
        console.log(req)
        console.log("----------------------------------------")
        form.parse(req, function (err, fields, files) {
            if (err) {
                throw err;
            }

            var image = files.imgFile;
            var path = image.path;
            path = path.replace('/\\/g', '/');
            var url = '/upload' + path.substr(path.lastIndexOf('\\'), path.length);
            var info = {
                "error": 0,
                "url": url
            };
            res.send(info);
        });
    });






























    app.use(function (req, res) {
        res.render("404");
    });

    function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录!');
            res.redirect('/login');
        }
        next();

    }

    function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录!');
            res.redirect('back');//返回之前的页面
        }
        next();
    }
};
