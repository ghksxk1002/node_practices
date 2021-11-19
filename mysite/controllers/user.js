const models = require('../models')

module.exports = {
    join: function(req, res){
        res.render('user/join');
    },
    _join:  async function(req, res, next){
        try{
            await models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender
            });
                
            res.redirect("/user/joinsuccess")

        } catch(e){
            next(e);
        }
    },
    joinsuccess: function(req, res){
        res.render("user/joinsuccess")
    },
    login: function(req, res){
        res.render('user/login');
    },
    _login: async function(req, res){

        try{
            const user = await models.User.findOne({
                attributes:['no', 'name', 'role'], // 값 매핑
                where: { // 객체를 넣어주면 알아서 = 효과가 난다 email  = req.body.email,
                    email: req.body.email,
                    password: req.body.password
                }
            });

            if(user==null){                             // req.body에 속성 추가
                res.render('user/login', Object.assign(req.body, {result:'fail'})) // Object.assign
                return;
            }

            // 세션 처리
            req.session.authUser = user;

            res.redirect('/');

        } catch(e){
            next(e);
        }
        
    },
    logout: async function(req, res, next){
        
        try{
            await req.session.destroy();
            res.redirect('/');
        } catch(e){
            next(e);
        };

    },
    update: async function(req, res, next){
        try {
            const user = await models.User.findOne({
                attributes: ['no','email','gender'],
                where: {
                    no :req.session.authUser.no
                }
            })

            res.render('user/update', {user} );
        } catch(e) {
            next(e);
        }
    },
    _update: async function(req, res, next) {

    }
}