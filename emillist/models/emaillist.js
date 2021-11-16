// mysql 가져오기
const mysql = require('mysql2');

module.exports = {
    findAll: function() {
        // 1. 커넷션 잡기 mysql 가져오기
        const conn = mysql.createConnection({
            host: '127.0.0.1',
            port: 3306,
            user: 'webdb',
            password: 'webdb',
            database: 'webdb'
        })
    }
}