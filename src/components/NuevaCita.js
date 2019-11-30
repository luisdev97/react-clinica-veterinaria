import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


const stateInicial = {
    cita: {
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    },
    error: false
}


class NuevaCita extends Component {

    state = {...stateInicial}

    handleChange = e => {
        this.setState({
            cita: {
                ...this.state.cita,[e.target.name]: e.target.value
            }
        });
    }


    handleSubmit = e => {

        e.preventDefault();
        const { mascota, propietario, fecha, hora, sintomas} = this.state.cita;
       
        if(mascota === "" || propietario === "" || fecha === "" || hora === "" || sintomas === ""){
            this.setState({
                error: true
            });

            return;
        }
        
        const nuevaCita = {...this.state.cita, id: uuid()};
        this.props.crearCita(nuevaCita);
        this.setState({...stateInicial});
    
    }


    render() {
        const { error } = this.state;
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">

                    <h2 className="card-title text-center mb-5">
                        Agregue su nueva cita
                    </h2>

                    { error && <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son requeridos</div> }

                    <form onSubmit={this.handleSubmit} >

                         <div className="form-group row">
                             <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                 Nombre mascota
                             </label> 
                             
                             <div className="col-sm-8 col-lg-10">
                                <input onChange={this.handleChange} value={this.state.cita.mascota} type="text" className="form-control" placeholder="Nombre de la mascota" name="mascota"/>
                             </div>
                         </div>




                         <div className="form-group row">
                             <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                 Nombre Dueño
                             </label> 
                             
                             <div className="col-sm-8 col-lg-10">
                                <input onChange={this.handleChange}  value={this.state.cita.propietario} type="text" className="form-control" placeholder="Nombre del propietario de la mascota" name="propietario"/>
                             </div>
                         </div>



                         <div className="form-group row">
                             
                             <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                 Fecha
                             </label> 
                             
                             <div className="col-sm-8 col-lg-4">
                                <input onChange={this.handleChange} value={this.state.cita.fecha} type="date" className="form-control" name="fecha"/>
                             </div>

                             <label htmlFor="" className="col-sm- 4 col-lg-2 col-form-label">
                                 Hora
                             </label> 
                             
                             <div className="col-sm-8 col-lg-4">
                                <input onChange={this.handleChange} value={this.state.cita.hora} type="time" className="form-control" name="hora"/>
                             </div>

                         </div>



                         <div className="form-group row">
                             <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                 Síntomas
                             </label> 
                             
                             <div className="col-sm-8 col-lg-10">
                                <textarea onChange={this.handleChange} value={this.state.cita.sintomas} className="form-control" name="sintomas" placeholder="Describe los síntomas"></textarea>
                             </div>
                         </div>



            <input value="AGREGAR NUEVA CITA" type="submit" className="py-3 mt-2 btn btn-success btn-block"/>



                    </form>

                </div>
            </div>
        );
    }
}

NuevaCita.propTypes = {
    nuevaCita: PropTypes.func.isRequired
}
export default NuevaCita;