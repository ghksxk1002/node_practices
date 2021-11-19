module.exports = function(role){
        return function(req, res, next){
        
        // 세션에 대한 요청 검사
        if(req.session.authUser && (role !== 'ADMIN' || req.session.authUser.role === 'ADMIN')){  // 인증이 되어있는 경우 +
            next();
            return;
        }

        // HTML에 대한 요청 처ㅣ
        if(req.accepts('html')){
            res.redirect(req.session.authUser ? '/' : '/user/login');
            return;
        }

        res.status(403).send({
            result: 'fail',
            data:null,
            message: '요청거부'
        })

    }
}