## mysite powed by node.js(express)

#### 설치패키지

```bash
[mysite] $ npm init -y
[mysite] $ npm i ejs
[mysite] $ npm i mysql2
[mysite] $ npm i express-session 익스프레스에서 세션관리를 할수있는 모듈
[mysite] $ npm i sequelize
[mysite] $ npm i dotenv          환경설정하는 dotenv config로 빠진다
[mysite] $ npm i multer          멀티파일 처리
[mysite] $ npm i winston         로그인 로고파일남기기
[mysite] $ npm i winston-daily-rotate-file
[mysite] $ npm i moment          날짜 

[mysite] $ npm i -D nodemon
[mysite] $ npm i -D mocha
[mysite] $ npm i -D chai
```



#### scripts in package.json

```JSON
"scripts":{
    "start" : "node index.js",
    "debug" : "nodemon index.js",
    "test"  : "npx mocha"
 },
```

#### project structure
<pre>
/mysite
    |--- index.js 서버 환경설정
    |--- package.json 
    |--- package-lock.json 모델 버전관리
    |--- [node-modules]
    |--- test
    |--- logging 로그를 남겨주는
    |--- [logs]  실제로 로그가 남는
    |       |--- [error]
    |--- [multer-temporary-stoer]
    |--- config 환경변수 설정
    |--- public
    |       |--- assets
    |               |--- [upload-images]
    |               |--- css
    |               |--- images
    |               |--- js
    |
    |--- routes
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
            |--- main
            |--- user
            |--- board
            |--- guestbook
            |--- gallery
            |--- includes
            |--- admin
                    |--- inscludes

</per>