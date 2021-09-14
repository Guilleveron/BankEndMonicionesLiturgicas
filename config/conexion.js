var mysql=require("mysql");
var con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'datosmoniciones'
}
);
con.connect(
    (err)=>{
        if(!err){
            console.log('Conección establecida');
        }else{
            console.log('Error de Conexión');
        }
    }
);

module.exports=con;