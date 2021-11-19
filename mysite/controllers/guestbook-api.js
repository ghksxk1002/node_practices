const models = require('../models');
const { Op } = require('sequelize');    // 오퍼레이터
module.exports = {
    create: async function(req, res, next){
        try{
            const result = await models.Guestbook.create(req.body)
            res.send({
                result: "success",
                data: result,
                message: null
            })
        }catch(e){
            next(e);
        }
    },
    read: async function(req, res, next) {
        try{
            const startNo = req.query.sno || 0;
            console.log(startNo);
            const results = await models.Guestbook.findAll({
                attributes:['no','name','message'],
                where:(startNo > 0) ? { no: {[Op.lt]: startNo}} : {},     // 오퍼레이트로 조건하나 더넣기  no가 startNo 보다 작다는 조건
                // 이런 형태이면 시뤌라이져가 where절을 만들지 않는다
                order: [
                    ['no', 'desc']
                ],
                limit: 3
            })

            res.send({
                result: 'success',
                message: null,
                data: results
            })

        } catch(e){
            next(e);
        }
    },
    delete: async function(req, res, next){
        try{
            await models.Guestbook.destroy({
                where: {
                    [Op.and]: [{no : req.params.no}, {password: req.body.password}]    // 두개의 조건이 있는 배열
                }
            })

            res.send({
                result:'success',
                message: null,
                data: req.params.no
            })

        } catch(e) {
            next(e);
        }
    }
}