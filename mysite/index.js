const http = require('http');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv')
const port = 8080;

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

// 1. Enviroment Variables 환경변수 설정 .. 환경변수는 단 한번만 읽어야 한다 프로그램이 실행할때 마다 dotenv읽으면 안된다
dotenv.config({path: path.join(__dirname,'config/app.env')});

// 2. Application Routes
//const applicationRouters = require('../routes'); 

// 3. logging

// 4. Application Setup
const application = express()
    // 4-1. static resources
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
    // 4-2. request body parser
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
    // 5. application Router Setup
    .use('/', mainRouter)// 여기서 부터 프로그램이 시작된다
    .use('/user', userRouter);// 여기서 부터 프로그램이 시작된다
//applicationRouters.setup(application);

// Server Setup
// httpModel
http.createServer(application)
    .on('listening', function(){
        console.log(`http server runs on ${process.env.PORT}`)
    }) // 서버가 올라간다음 on 으로 이벤트를 바로 걸수 있다
    .on('error', function(error){
        switch(error.code){
            case 'EACCESS':
                console.error(`${process.env.PORT} requires privileges`); // 서버가 비정상적으로 종료 되었을때
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${process.env.PORT} is already in use`)      // 서버가 정상적으로 종료 되었을때
                process.exit(0);
                break;
            default:
                throw error;
            }
        })
        .listen(process.env.PORT)
        // 허리 펴세요 !!!