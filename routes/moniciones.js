var express = require('express');
var router = express.Router();
const monicionesController= require("../controllers/monicionesController");

/* GET home page. */
router.get('/todas',monicionesController.index);
router.get('/crear',monicionesController.crear);
router.post('/guardar',monicionesController.guardar);
router.post('/eliminar/:id',monicionesController.eliminar);
router.get('/editar/:id',monicionesController.editar);
router.post('/actualizar',monicionesController.actualizar);


module.exports = router;
