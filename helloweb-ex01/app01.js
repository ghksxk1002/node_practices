const http = require('http');


const post = 8080;
// 요청이 들어오면 실행되는 함수 : 이 펑션이 핸들러가 되는거다
const server = http.createServer(function(req, resp){
    console.log('receive request..........');
    resp.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
        
    })
    resp.end('<h1>안농</h1>');
    
});

// 함수 실행하기
server.listen(post, function(){
    console.log(`http server running on ${post}`);
});