const {DataTypes}= require('sequelize');

module.exports = function(Sequelize){
    // 연결할 객체에 대한 정보를 주어햐한다
    return Sequelize.define('Guestbook', {
        // User 객체에 대한 속성
        no: {
            field: 'no', // 칼럼 이름
            type: DataTypes.BIGINT(11), // 데이터 타입
            primaryKey: true,           // 프라이머리 키인지 아닌지
            autoIncrement: true         // 오토 인트리먼트 트루 폴스
        },
        name: {
            field: 'name',                // 칼럼 이름
            type: DataTypes.STRING(45), // 데이터 타입
            allowNull: false            // null 불가능 가능 설정
        },
        password: {
            field: 'password', // 칼럼 이름
            type: DataTypes.STRING(45), // 데이터 타입
            allowNull: false  
        },
        message: {
            field: 'message', // 칼럼 이름
            type: DataTypes.TEXT, // 데이터 타입
            allowNull: false  
        },
        reg_date: {
            field: 'reg_date', // 칼럼 이름
            type: DataTypes.DATE, // 데이터 타입
            allowNull: false, 
            defaultValue: Sequelize.NOW
        },
    },{
        underscored: true,
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'guestbook'
    });
}