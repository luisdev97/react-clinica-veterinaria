import React from 'react';


const Cita = ({ cita, eliminarCita }) => {
    const { mascota, propietario, fecha, hora, sintomas, id } = cita;
    return (
        <div className="media mt-3 ml-3">
            <div className="media-body">
                <h3 className="mt-0">{ mascota }</h3>
                <p className="card-text"><span>Propietario: </span>{ propietario }</p>
                <p className="card-text"><span>Fecha: </span>{ fecha }</p>
                <p className="card-text"><span>Hora: </span>{ hora }</p>
                <p className="card-text"><span>Síntomas: </span>{ sintomas }</p>
            <button onClick={() => {eliminarCita(id)}} className="btn btn-danger">Eliminar &times</button>
            </div>
        </div>
    );
};

export default Cita;