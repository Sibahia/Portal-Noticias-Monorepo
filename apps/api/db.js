const { sqlORM } = require('./models/database.js');
const db = new sqlORM('./database/news.db');

db.define('notices', {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    autor: 'TEXT NOT NULL',
    title: 'TEXT NOT NULL',
    content: 'TEXT NOT NULL',
    time_created: 'TEXT NOT NULL'
});

db.define('users', {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    user: 'TEXT NOT NULL',
    username: 'TEXT NOT NULL',
    password: 'TEXT NOT NULL'
});

db.define('images', {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    notice_id: 'INTEGER NOT NULL',
    image_path: 'TEXT NOT NULL'
}, [
    { column: 'notice_id', references: 'notices', refColumn: 'id' }
]);