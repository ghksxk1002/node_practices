const moment = require('moment');
const models = require('../models');

module.exports = {
    index: async function(req, res, next) {
        try {
            const result = await models.Guestbook.findAll({
                attributes: ['no','name','password','message'],
                order: [
                    ['no', 'desc']
                ]
            });
            
            res.render("guestbook/list",
             {
                 result, 
                 moment: moment
            });
            // moment(vo.regDate).format('YYYY-MM-DD- hh:mm:ss');
        } catch(e) {
            next(e);
        }
    },
    spalanding: function (req, res){
        res.render("guestbook/index-spa");
    },
    add: async function(req, res, next) {
        try {
            await models.Guestbook.create(req.body);
            res.redirect('/guestbook');
        } catch(e) {
            next(e);
        }
    },
    _delete: function(req, res, next){
        try {
            models.Guestbook.destroy({
                where: req.body
            });
            res.redirect('/');
        } catch(e) {
            next(e);
        }

    }
}