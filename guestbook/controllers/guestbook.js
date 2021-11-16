const model = require("../models/guestbook")
module.exports = {

    index: async function(req, res) {
        const results = await model.findAll(function(){});
        //console.log(results);
        res.render('index', {
            list : results || []
        });
    },
    add: async function(req, res) { 
        // console.log(req.body);
        const results = await model.insert(req.body);
        res.redirect("/")
    },
    form: function(req, res){ // 게스트북 입력 form 띠워주기

        const no = req.params.no;
        // const password = req.body.password
        res.render('deleteform', {
            no: no || ''
        });
    },
    delete: async function(req, res){
        await model.delete(req.body);
        res.redirect("/")
    }
    
}