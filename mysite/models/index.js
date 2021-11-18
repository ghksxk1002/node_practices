const {Sequelize}= require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
} );

// Mapping 객체 import
const User = require('./User')(sequelize);
//const Guestbook = require('./Guestbook')(sequelize);

// DB에 반영(DDL)
User.sync({
    force: process.env.TALEB_CREATE_ALWAYS === 'true',
    alter: process.env.TALEB_ALTER_ALWAYS ==='true'
});

// Exports Mapping 객체
module.exports = {User};
