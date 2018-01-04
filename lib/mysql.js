const mysql = require('mysql')

const cfg = require('../config')

// 创建数据池
const pool  = mysql.createPool({
  host     : cfg.database.HOST,   // 数据库地址
  user     : cfg.database.USERNAME,    // 数据库用户
  password : cfg.database.PASSWORD,   // 数据库密码
  database : cfg.database.DATABASE  // 选中数据库
})

// 定义执行sql语句方法
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      }
      else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
        })
        connection.release()
      }
    })
  })
}



const reg = (user) => {
  const _sql = `insert into users(name, pass) values(?,?);`
  return query(_sql, user)
}


module.exports = {
  reg
}