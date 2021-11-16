const express = require('express');

const router = express.Router();// 라우터 꺼내서 담아주고

router.route("/01").get(function(req, res){ // get방식
    res.render('hello/01');
}); // 컨트롤러

router.route("/02").get(function(req, res){ // get방식
    const data = {
        no: req.query.no || '',
        email: req.query.email || ''
    }
    
    res.render('hello/02', data);
});

module.exports = router;