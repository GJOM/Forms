import mysql from 'mysql2';

export const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "A$kr4mVn7h*+",
    database: "bankdb"
});
