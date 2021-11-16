const express = require('express');

const router = express.Router();// 라우터 꺼내서 담아주고

// user?no=10
router.route("").get(function(req, res){ // get방식

    res.render('user/info', {
        no: req.query.no || 0
    });
}); // 컨트롤러

router.route("/info/:no").get(function(req, res){ // get방식
    res.render("user/info",{
        no: req.params.no || '',
    })
});

router.route("/join").get(function(req, res){ 
    res.render("user/join")
});

router.route("/join").post(function(req, res){ 
    console.log(req.body)
    res.redirect("/");
});

router.route("/api").post(function(req, res){ 
    const vo = {
        no: 30,
        name: "이승현",
        gender:"male"
    };

    // res.writeHead(200, {
    //     'context-Type' : "application/json"
    // });
    res.send(vo);
});


module.exports = router;