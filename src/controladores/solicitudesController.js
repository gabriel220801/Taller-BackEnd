import { Solicitudes } from "../modelos/solicitudModelo.js";

const crearSolicitud = (req, res) => {
    if (!req.body.nombreAdoptante) {
        res.status(400).send({
            mensaje: "El nombre del adoptante es requerido"
        });
        return;
    }

    const dataset = {
        nombreAdoptante: req.body.nombreAdoptante,
        fechaSolicitud: req.body.fechaSolicitud,
        estado: req.body.estado
    };

    Solicitudes.create(dataset)
        .then((resultado) => {
            res.status(200).json({
                mensaje: "Registro de solicitud exitoso",
                solicitud: resultado
            });
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al registrar la solicitud: ${err}`
            });
        });
};

const editarSolicitud = (req, res) => {
    const id = req.params.id;

    Solicitudes.update(req.body, {
        where: { id: id }
    })
    .then((resultado) => {
        if (resultado == 1) {
            res.status(200).json({
                mensaje: "Solicitud actualizada correctamente"
            });
        } else {
            res.status(404).json({
                mensaje: `No se pudo actualizar la solicitud con id=${id}. Puede que la solicitud no exista o que los datos sean iguales.`
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            mensaje: `Error al actualizar la solicitud con id=${id}: ${err}`
        });
    });
};

const buscarSolicitudes = (req, res) => {
    Solicitudes.findAll()
    .then((solicitudes) => {
        res.status(200).json(solicitudes);
    })
    .catch((err) => {
        res.status(500).json({
            mensaje: `Error al recuperar las solicitudes: ${err}`
        });
    });
};

const buscarSolicitudPorId = (req, res) => {
    const id = req.params.id;

    Solicitudes.findByPk(id)
    .then((solicitud) => {
        if (solicitud) {
            res.status(200).json(solicitud);
        } else {
            res.status(404).json({
                mensaje: `No se encontró ninguna solicitud con id=${id}`
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            mensaje: `Error al buscar la solicitud con id=${id}: ${err}`
        });
    });
};

const eliminarSolicitud = (req, res) => {
    const id = req.params.id;

    Solicitudes.destroy({
        where: { id: id }
    })
    .then((resultado) => {
        if (resultado == 1) {
            res.status(200).json({
                mensaje: "Solicitud eliminada correctamente"
            });
        } else {
            res.status(404).json({
                mensaje: `No se pudo eliminar la solicitud con id=${id}. Puede que la solicitud no exista.`
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            mensaje: `Error al eliminar la solicitud con id=${id}: ${err}`
        });
    });
};



export { crearSolicitud, editarSolicitud, buscarSolicitudes, buscarSolicitudPorId, eliminarSolicitud };