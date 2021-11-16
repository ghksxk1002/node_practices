const model = require("../models/emaillist")
module.exports = {

    index: async function(req, res) {
        const results = await model.findAll(function(){});
        console.log(results);
        res.render('index', {
            list : results || []
        });
    },
    form: function(req, res){ // 이메일 입력 form 띠워주기
        res.render('form');
    },
    add: async function(req, res) { 
        console.log(req.body);
        const results = await model.insert(req.body);
        res.redirect("/")
    }
}