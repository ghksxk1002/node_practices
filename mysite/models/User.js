const {sequelize, DataTypes, Sequelize, Model }= require('sequelize');
const user = require('../controllers/user');

// sequelize 초기화 작업이 먼저 필요 - 데이터 베이스 연결정보를 줘야함
const sequelize = new Sequelize({});

// 연결할 객체에 대한 정보를 주어햐한다
const User = sequelize.define('User', {
    // User 객체에 대한 속성
    no: {
        field: no, // 칼럼 이름
        type: DataTypes.BIGINT(11), // 데이터 타입
        primaryKey: true,           // 프라이머리 키인지 아닌지
        autoIncrement: true         // 오토 인트리먼트 트루 폴스
    },
    name: {
        
    },
    email: {

    },
   },{
        underscored: true,
        freezeTableName: true,
        timestamps: false,
        createdAt: false, 
        updatedAt: false,
        tableName: 'user'
    
})


User.sync({
    force: true,
    alter: true
})

Model.exports = User;