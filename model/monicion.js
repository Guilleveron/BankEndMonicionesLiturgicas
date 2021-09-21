module.exports={
    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM moniciones", funcion);
    },
    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO moniciones (dia, semana, fecha, titulo, ciclo, tiempo, entrada, lecturas, respuestaOracionUniversal, oracionUniversal1, oracionUniversal2, oracionUniversal3, oracionUniversal4, oracionUniversal5, presentacionDeLasOfrendas, comunion, despedida) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [datos.dia, datos.semana, datos.fecha,datos.titulo, datos.ciclo, datos.tiempo, datos.entrada, datos.lecturas, datos.respuestaOracionUniversal, datos.oracionUniversal1, datos.oracionUniversal2, datos.oracionUniversal3, datos.oracionUniversal4, datos.oracionUniversal5, datos.presentacionDeLasOfrendas, datos.comunion, datos.despedida], funcion);
    },
    retornarDatosID:function(conexion,id,funcion){
        conexion.query("SELECT * FROM moniciones WHERE id=? ",[id],funcion);
    },
    borrar:function (conexion,id,funcion) {
        conexion.query("DELETE FROM moniciones WHERE id=? ",[id],funcion);
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("UPDATE moniciones SET dia=?, semana=?, fecha=?,titulo=?, ciclo=?, tiempo=?, entrada=?, lecturas=?, respuestaOracionUniversal=?, oracionUniversal1=?, oracionUniversal2=?, oracionUniversal3=?, oracionUniversal4=?, oracionUniversal5=?, presentacionDeLasOfrendas=?, comunion=?, despedida=? WHERE id=? ",[datos.dia, datos.semana, datos.fecha,datos.titulo, datos.ciclo, datos.tiempo, datos.entrada, datos.lecturas, datos.respuestaOracionUniversal, datos.oracionUniversal1, datos.oracionUniversal2, datos.oracionUniversal3, datos.oracionUniversal4, datos.oracionUniversal5, datos.presentacionDeLasOfrendas, datos.comunion, datos.despedida, datos.id], funcion);
    }
}