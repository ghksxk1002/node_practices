const {DataTypes}= require('sequelize');

module.exports = function(Sequelize){
    // 연결할 객체에 대한 정보를 주어햐한다
    return Sequelize.define('Gallery', {
        // User 객체에 대한 속성
        no: {
            field: 'no', // 칼럼 이름
            type: DataTypes.BIGINT(11), // 데이터 타입
            primaryKey: true,           // 프라이머리 키인지 아닌지
            autoIncrement: true         // 오토 인트리먼트 트루 폴스
        },
        comment: {
            field: 'comment',            // 칼럼 이름
            type: DataTypes.STRING(200), // 데이터 타입
            allowNull: false             // null 불가능 가능 설정
        },
        url: {
            field: 'url', // 칼럼 이름
            type: DataTypes.STRING(200), // 데이터 타입
            allowNull: false  
        }
    },{
        underscored: true,
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'gallery2'
    });
}