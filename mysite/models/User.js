const {DataTypes}= require('sequelize');
// sequelize 초기화 작업이 먼저 필요 - 데이터 베이스 연결정보를 줘야함
//const sequelize = new Sequelize({});

module.exports = function(sequelize){
    // 연결할 객체에 대한 정보를 주어햐한다
    return sequelize.define('User', {
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
        email: {
            field: 'email', // 칼럼 이름
            type: DataTypes.STRING(200), // 데이터 타입
            allowNull: false  
        },
        password: {
            field: 'password', // 칼럼 이름
            type: DataTypes.STRING(45), // 데이터 타입
            allowNull: false  
        },
        gender: {
            field: 'gender', // 칼럼 이름
            type: DataTypes.ENUM('male', 'fmale'), // 데이터 타입
            allowNull: false  
        },
        role: {
            field: 'role', // 칼럼 이름
            type: DataTypes.ENUM('USER', 'ADMIN'), // 데이터 타입
            allowNull: false, 
            defaultValue: 'USER'
        },
    },{
        underscored: true,
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'user'
    });
}