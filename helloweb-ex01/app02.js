const http = require('http');
const fs = require('fs');

const post = 8080;
// 요청이 들어오면 실행되는 함수 : 이 펑션이 핸들러가 되는거다
const server = http.createServer(function(req, resp){
    console.log(req.url);
    
    // 특정파일을 지정핮 않았다는뜻
    if(req.url === '/'){
        req.url = '/index.html';
    }
    // 해당파일 읽기 : 콜백방식으로 io는 비동기, 읽다가 
    fs.readFile(`${__dirname}/public${req.url}`, function(error, data){
        resp.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        resp.end(data);
    });

    
    
});

// 함수 실행하기
server.listen(post, function(){
    console.log(`http server running on ${post}`);
});