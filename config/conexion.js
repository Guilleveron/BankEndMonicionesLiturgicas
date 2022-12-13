var mysql=require('mysql2')
var con = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'test',
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
  waitForConnections: true,
})
con.getConnection((err) => {
  if (!err) {
    console.log('Conexion a la base de datos Exitosa')
  } else {
    console.log('Error de Conexión.')
  }
})

module.exports = con
