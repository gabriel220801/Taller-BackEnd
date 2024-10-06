import { Mascotas } from "../modelos/mascotaModelo.js";


//crear recurso mascota
const crear = (req, res)=>{
    if(!req.body.nombre){
        res.status(400).send({
            mensaje: "El nombre de la mascota es requerido"
        })
        return;
    }

    const dataset ={
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        edad: req.body.edad,
        genero: req.body.genero,
        peso: req.body.peso,
        imagen: req.body.imagen
    }

    //usar sequelize bsae de datos
    Mascotas.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro de mascota Exitoso"
        });
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `Error al registrar la mascota ::: ${err}`
        });
    });
}

const editar = (req, res) => {
    const id = req.params.id;

    Mascotas.update(req.body, {
        where: { id: id }
    }).then((resultado) => {
        if (resultado == 1) {
            res.status(200).json({
                mensaje: "Mascota actualizada correctamente"
            });
        } else {
            res.status(404).json({
                mensaje: `No se pudo actualizar la mascota con id=${id}. Puede que la mascota no exista o que los datos sean iguales a los actuales.`
            });
        }
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Error al actualizar la mascota con id=${id}: ${err}`
        });
    });
}

const buscarTodos = (req, res) => {
    Mascotas.findAll()
    .then((mascotas) => {
        res.status(200).json(mascotas);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Error al recuperar las mascotas: ${err}`
        });
    });
}

const buscarPorId = (req, res) => {
    const id = req.params.id;

    Mascotas.findByPk(id)
    .then((mascota) => {
        if (mascota) {
            res.status(200).json(mascota);
        } else {
            res.status(404).json({
                mensaje: `No se encontró ninguna mascota con id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Error al buscar la mascota con id=${id}: ${err}`
        });
    });
}

const eliminar = (req, res) => {
    const id = req.params.id;

    Mascotas.destroy({
        where: { id: id }
    }).then((resultado) => {
        if (resultado == 1) {
            res.status(200).json({
                mensaje: "Mascota eliminada correctamente"
            });
        } else {
            res.status(404).json({
                mensaje: `No se pudo eliminar la mascota con id=${id}. Puede que la mascota no exista.`
            });
        }
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Error al eliminar la mascota con id=${id}: ${err}`
        });
    });
}



export {crear, editar, buscarTodos, buscarPorId, eliminar}