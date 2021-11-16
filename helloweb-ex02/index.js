const http = require('http');
const path = require('path');
const express = require('express');


const mainRouter = require('./routes/main');
const helloRouter = require('./routes/hello');
const userRouter = require('./routes/user');
const port = 8080;

// Application Setup
const application = express()
    // 1. static resources
    .use(express.static(path.join(__dirname, 'public')))
    // 2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded --> 이러한 형식으로 오는 폼 데이터를 파싱해서 넣어줌
    .use(express.json())                      // application/json
    // 3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // 4. request router(인증처리에 사용이 용의한 필터같은 존제) , router는 express
    .all('*', function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();  
    })
    // 여기서 부터 프로그램이 시작된다
    .use('/', mainRouter)
    .use('/hello', helloRouter) // /user 다음을 userRouter가 controller에 연결시켜주는것 노드에서의 controller는 함수라고 볼수 있다
    .use('/user', userRouter);

// Server Setup
// httpModel
http.createServer(application)
    .on('listening', function(){
        console.log(`http server runs on ${port}`)
    }) // 서버가 올라간다음 on 으로 이벤트를 바로 걸수 있다
    .on('error', function(error){
        switch(error.code){
            case 'EACCESS':
                console.error(`${port} requires privileges`); // 서버가 비정상적으로 종료 되었을때
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${port} is already in use`)      // 서버가 정상적으로 종료 되었을때
                process.exit(0);
                break;
            default:
                throw error;
            }
        })
        .listen(port)
        