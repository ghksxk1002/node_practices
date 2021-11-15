const connect = require('connect');
const serveStatic =require('serve-static');
const connectRoute = require('connect-route');

const port = 8080;
const app = connect();

app.use(connectRoute(function(router){
    // 라우팅 하기
    router.get("/", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        resp.end('<h1>메인입니다</h1>');
    });

    router.get("/user", function(req, resp){
        console.log(req._parsedUrl.query);

        req.query = {};
        params = (req._parsedUrl.query || '').split('&');
        params.forEach(params => {
            tokens = params.split('=');
            req.query[tokens[0]] = tokens[1]; 
        });

        resp.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        resp.end(`<h1>UserNo : ${req.query.no}</h1>`);
    });

    router.get("/guestbook", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        resp.end('<h1>게스트북입니다</h1>');
    });

    router.get("/board", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        resp.end('<h1>게시판입니다</h1>');
    });

    router.get("/board/:no", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        resp.end(`<h1>게시판뷰입니다: ${req.params.no}</h1>`);
    });

}));

app.use(serveStatic(`${__dirname}/public`));

app.listen(port, function(){
    console.log(`http server running on ${port}`);
});