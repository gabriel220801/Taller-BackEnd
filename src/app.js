import express from "express";
import { routerMascotas } from "./rutas/mascotasRouter.js";
import { routerSolicitudes } from "./rutas/solicitudesRouter.js";
import { db } from "./database/conexion.js";
import cors from 'cors';

//crear instancia express
const app = express();


//json
app.use(express.json());

app.use(cors());


//verificar conexion base de datos
db.authenticate().then (()=>{
    console.log(`conexion a la  base de datos correcta`)
    }).catch(err=>{
        console.log(`conexion a la  base de datos incorrecta ${err}`)
});

//llamando rutas de mascotas
app.use("/mascotas", routerMascotas)

//llamado rutas de solicitudes
app.use("/solicitudes", routerSolicitudes)

//puerto del servidor
const PORT = 4000;

db.sync().then(()=>{
    //Abri servicio e iniciar el Servidor
    app.listen(PORT,()=>{
        console.log(`Servidor Inicializado en el puerto ${PORT}`);
    })
    }).catch(err=>{
        console.log(`Error al sincronizar la base de datos ${err}`);
});
    
