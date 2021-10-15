var mysql=require("mysql");
var con= mysql.createPool({
    host:'us-cdbr-east-04.cleardb.com',
    user:'bd839da3b0d485',
    password:'7ee796ce',
    database:'heroku_ae4cdccedabc381'
}
);
con.getConnection(
    (err)=>{
        if(!err){
            console.log('Conexion a la base de datos Exitosa');
        }else{
            console.log('Error de Conexión.');
        }
    }
);

module.exports=con;