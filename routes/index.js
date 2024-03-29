var express = require('express');
var router = express.Router();
const inicioController= require("../controllers/inicioController");


router.get('/',inicioController.index);
router.get('/todos-los-ciclos',inicioController.todosLosCiclos);
router.get('/Nosotros',inicioController.nosotros);
router.get('/:id',inicioController.monicionId);
router.get('/ciclo/:ciclo',inicioController.ciclo);

module.exports = router;
