var conexion=require('../config/conexion');
var monicio=require('../model/monicion');
module.exports={

    index:function(req,res){

        monicio.obtener(conexion,function (err,datos) {
            //console.log(datos);
            res.render('index', { title: 'Moniciones Litúrgicas', moniciones:datos });
        });   
    },
    nosotros: function (req, res){
        res.render('nosotros', {
            titulo: 'Sobre Nosotros'});
    },
    ciclo:function(req,res){
        //console.log(req.params);
        res.render('ciclo', { 
            ciclo: req.params.ciclo});
    }
}