const express = require('express');

const router = express.Router();// 라우터 꺼내서 담아주고

router.route("").get(function(req, res){
    res.render('main/index');
}); // 컨트롤러

module.exports = router;