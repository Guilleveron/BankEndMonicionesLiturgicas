var mysql=require("mysql");
var con= mysql.createPool({
    host:'us-cdbr-east-04.cleardb.com',
    user:'b3dc391cc851fb',
    password:'08fcee7d',
    database:'heroku_dfe49c234591b59'
}
);
con.getConnection(
    (err)=>{
        if(!err){
            console.log('Conexion a la base de datos Exitosa');
        }else{
            console.log('Error de Conexión');
        }
    }
);

module.exports=con;