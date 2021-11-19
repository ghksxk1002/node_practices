// 파일 시스템 사용하기 코어모듈 사용
const fs = require('fs');
const path = require('path');
const models = require('../models')

module.exports = {
    index: async function(req, res, next){
        const results = await models.Gallery.findAll({
            attributes: ['no', 'url', 'comment'],
            order: [
                ['no','desc']
            ]
        })
        res.render('gallery/index', {results});
    },
    upload: async function(req, res, next){
        try {
            const file = req.file;
            if(file){
                const contents = fs.readFileSync(file.path);
                const storeDirectory = 
                    path.join(
                        path.dirname(require.main.filename),                // 실제 어플리케이션 위치 
                        process.env.STATIC_RESOURCES_DIRECTORY ,            // 임시 파일 위치
                        process.env.UPLOADIMAGE_STORE_LOCATION );           //저장하고자 하는 위치(지금은 public 밑에)
                const storePath = (path.join(storeDirectory, file.filename))+path.extname(file.originalname);    // 디스크 디렉토리
                const url = path.join(process.env.UPLOADIMAGE_STORE_LOCATION, file.filename)+path.extname(file.originalname);   // url path

                fs.existsSync(storeDirectory) || fs.mkdirSync(storePath);   // 임시 저장 디렉토리가 없으면 생성
                fs.writeFileSync(storePath, contents, {flag:'w+'});         // 사진을 디스크 디렉토리에 저장
                fs.unlinkSync(file.path);                                   // 임시 저장 파일 닫기
            
                await models.Gallery.create({
                    url: url.replace(/\\/gi, '/'),
                    comment: req.body.comment || ''
                })
            }
        
        res.redirect('/gallery');
        } catch(e) {
            next(e);
        }
    },
    delete: async function(req, res, next){
        try{
            const results = await models.Gallery.destroy({
                where: {
                    no : req.params.no
                }
            })
        
            res.redirect('/gallery');
        } catch(e) {
            next(e)
        }
    }
}