const express = require('express');
const router = express.Router();


//GET peticion para /pop
router.get('/', (req, res, next) => {//se declaran variables: req para recibir, res para responder, next para el siguiente 
    res.status(200).json({
    message: 'All Authors were fetched'// cuando se hace http://localhost:8081/pop en browser, aparece por defecto este mensaje
    });
    });
//GET peticion para /pop/:id
router.get('/:id', (req, res, next) => {//se declaran variables: req para recibir, res para responder, next para el siguiente 
    console.log(req.params.id);// cuando se hace http://localhost:8081/pop/:id=1 en consola, aparece id=1
    res.status(200).json({
    message: 'id recibido'// cuando se hace http://localhost:8081/pop/:id=1 en browser, aparece por defecto este mensaje
    });
    });
module.exports = router;

