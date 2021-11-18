module.exports = {
    join: function(req, res){
        res.render('user/join');
    },
    _join:  function(req, res){
        res.redirect("/user/joinsuccess")
    },
    joinsuccess: function(req, res){
        res.render("user/joinsuccess")
    }
}