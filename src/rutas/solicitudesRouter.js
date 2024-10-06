import express from "express";
import { buscarSolicitudPorId, buscarSolicitudes, crearSolicitud, editarSolicitud, eliminarSolicitud } from "../controladores/solicitudesController.js";

const routerSolicitudes = express.Router();

routerSolicitudes.get('/home', (req, res) => {
    res.send('Bienvienido al Sitio Principal.');
});

routerSolicitudes.post('/crearSolicitud', (req, res)=>{
    crearSolicitud(req,res);
});

routerSolicitudes.put('/editarSolicitud/:id', (req, res)=>{
    editarSolicitud(req,res);
});

routerSolicitudes.get('/buscarSolicitud', (req, res)=>{
    buscarSolicitudes(req,res);
});

routerSolicitudes.get('/buscarSolicitudPorId/:id', (req, res)=>{
    buscarSolicitudPorId(req,res);
})

routerSolicitudes.delete('/eliminarSolicitud/:id', (req, res)=>{
    eliminarSolicitud(req,res);
})
export {routerSolicitudes}