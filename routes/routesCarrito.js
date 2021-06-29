const express = require('express')
const routerCarrito = express.Router()
const controller = require('../api/carrito')

routerCarrito.get('/', (req, res) => {
    res.send('Bienvenido al servidor express');
});

routerCarrito.get('/listar/:id', (req, res) => {
    try {
        res.send(controller.listarPorId(parseInt(req.params.id)));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

routerCarrito.post('/agregar/:id',(req, res)=>{
    try {
        res.json(controller.guardar(req.body));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

routerCarrito.delete('/borrar/:id',(req,res)=>{
    try {
        res.send(controller.borrar(req.params.id));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = routerCarrito;