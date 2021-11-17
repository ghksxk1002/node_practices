const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

// .use('/', mainRouter)// 여기서 부터 프로그램이 시작된다
// .use('/user', userRouter);// 여기서 부터 프로그램이 시작된다

// .all('*', function(req, res, next){
//     res.locals.req = req;
//     res.locals.res = res;
//     next();
// });