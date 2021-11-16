// mysql 가져오기
const mysql = require('mysql2');
const dbconn = require('./dbconn');
const util = require('util');

module.exports = {
    findAll: async function(callback) {
        // 1. 커넷션 잡기 mysql 가져오기
        // dbconn.js 로 빼놨음
        const conn =dbconn();

        // const query = function(sql, data){
        //     return new Promise(function(resolve, reject){
        //         conn.query(sql, [], function(error, results, field){
        //             return error ? reject(error) : resolve(results);
        //         }) 
        //     })
        // }

        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, [], (error, results, field) => error ? reject(error) : resolve(results))) 
        
        const query = util.promisify(conn.query).bind(conn);

        // 쿼리때리기
        try{
            return await query(
                'select no, first_name as firstName, last_name as lastName, email from emaillist order by no desc', 
                []);
        } catch(e) {
            console.log(`[error] : ${error}`);
        } finally {
            conn.end();
        }
    },
    // insert 함수 만들기
    insert: async function(emaillist){
        const conn = dbconn();

        // 퀀리 함수 만들기
        const query = util.promisify(conn.query).bind(conn);

        try{
            return await query(
                'insert into emaillist(first_name, last_name, email) values(?,?,?)', 
                Object.values(emaillist)); // Object객체에 values 함수가 넘어온 객체를 배열로 만들어준다.
        } catch(e) {
            console.log(`[error] : ${error}`);
        } finally {
            conn.end();
        }

    }
}