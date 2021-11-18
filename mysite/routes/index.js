const errorRoute = require('./error');

const applicationRouters = {
    setup: function(application){

    //const site = models.Site.findOne();

    application
        .all('*', function(req, res, next){
            res.locals.req = req;
            res.locals.res = res;
            next();
        })
        // 필요한 라우터 추가
        .use('/',  require('./main'))   
        .use('/user', require('./user'))
        .use(errorRoute.error404)       // 에러내용 헨들러 넣기 : 404
        .use(errorRoute.error500)       // 에러내용 헨들러 넣기 : 404
        .siteTitle = 'mysite';          // sping 의 servletContext 같은 개념 
                                        // 이승현 잘한다 잘한다!!!!!!!!ㄴㅇㄹㄴㄹㅇㄴㄹㅇㄹㅇㄹ
                                        // 이승현 바보
    }
}

module.exports = {applicationRouters};