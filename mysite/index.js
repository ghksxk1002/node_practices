const http = require('http');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv')
const port = 8080;

// const mainRouter = require('./routes/main');
// const userRouter = require('./routes/user');

// 1. Enviroment Variables 환경변수 설정 .. 환경변수는 단 한번만 읽어야 한다 프로그램이 실행할때 마다 dotenv읽으면 안된다
dotenv.config({path: path.join(__dirname,'config/app.env')});

// 2. Application Routes
const {applicationRouters} = require('./routes'); 
const { SIGTERM } = require('constants');
// 3. logging
const logger = require('./logging');

// 4. Application Setup
const application = express()
    // 4-1. static resources
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
    // 4-2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded --> 이러한 형식으로 오는 폼 데이터를 파싱해서 넣어줌
    .use(express.json())                      // application/json
    // 3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs');
    // 5. application Router Setup
    applicationRouters.setup(application);

// Server Setup
// httpModel
http.createServer(application)
    .on('listening', function(){
        logger.info(`http server runs on ${process.env.PORT}`)
    }) // 서버가 올라간다음 on 으로 이벤트를 바로 걸수 있다
    .on('error', function(error){
        switch(error.code){
            case 'EACCESS':
                logger.error(`${process.env.PORT} requires privileges`); // 서버가 비정상적으로 종료 되었을때
                process.exit(1);
                break;
            case 'EADDRINUSE':
                logger.error(`${process.env.PORT} is already in use`)      // 서버가 정상적으로 종료 되었을때
                process.exit(0);
                break;
            default:
                throw error;
            }
        })
        .listen(process.env.PORT)
        // 허리 펴세요 !!!