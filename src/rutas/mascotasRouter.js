import express from "express";
import { buscarPorId, buscarTodos, crear, editar, eliminar } from "../controladores/mascotasController.js";

const routerMascotas = express.Router();

routerMascotas.get('/', (req, res) => {
    res.send('Bienvienido al Sitio Principal.');
});

routerMascotas.post('/crear', (req, res) => {
    crear(req,res);
});

routerMascotas.put('/editar/:id', (req, res)=>{
    editar(req,res);
});

routerMascotas.get('/buscarTodos', (req, res)=>{
    buscarTodos(req,res);
});

routerMascotas.get('/buscarPorId/:id',(req, res)=>{
    buscarPorId(req,res);
});

routerMascotas.delete('/eliminar/:id', (req, res)=>{
    eliminar(req,res);
});

export {routerMascotas}