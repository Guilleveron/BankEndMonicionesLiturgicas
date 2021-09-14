var conexion=require('../config/conexion');
var monicion=require('../model/monicion');
module.exports={

    index:function(req,res){

        monicion.obtener(conexion,function (err,datos) {
            //console.log(datos);
            res.render('moniciones/index', { title: 'Página de', moniciones:datos });
        });
        
    },
    crear:function (req,res) {
        res.render('moniciones/crear');
    },
    guardar:function (req,res){
        //console.log(req.body);
        monicion.insertar(conexion,req.body,function (err) {
             res.redirect('/');
        });
    },
    eliminar:function (req,res) {
        //console.log("Recepción de datos");
        //console.log(req.params.id);
        monicion.retornarDatosID(conexion,req.params.id);
        monicion.borrar(conexion,req.params.id, function (err) {
             res.redirect('/');
        });
    },
    editar:function (req,res) {

        monicion.retornarDatosID(conexion,req.params.id, function (err,registros) {
            //console.log(registros[0]);
            res.render('moniciones/editar', {monicion:registros[0]});
        });     
    },
    actualizar:function(req,res) {
        //console.log(req.body.titulo,req.body.ciclo,req.body.tiempo);

        if(req.body.titulo,req.body.ciclo,req.body.tiempo, req.body.entrada, req.body.lecturas, req.body.respuestaOracionUniversal, req.body.oracionUniversal1, req.body.oracionUniversal2, req.body.oracionUniversal3, req.body.oracionUniversal4, req.body.oracionUniversal5, req.body.presentacionDeLasOfrendas, req.body.comunion, req.body.despedida){
            monicion.actualizar(conexion,req.body,function (err) { });
        res.redirect('/');
        }
    }

}