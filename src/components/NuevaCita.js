import React, { Component } from 'react';

class NuevaCita extends Component {

    state = {
        cita: {
            mascota: "",
            propietario: "",
            fecha: null,
            hora: null,
            sintomas: ""
        }
    }

    handleChange = e => {
        this.setState({
            cita: {
                ...this.state.cita,[e.target.name]: e.target.value
            }
        });
        
        console.log(this.state);
    }

    render() {

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">

                    <h2 class="card-title text-center mb-5">
                        Agregue su nueva cita
                    </h2>

                    <form>

                         <div className="form-group row">
                             <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                 Nombre mascota
                             </label> 
                             
                             <div className="col-sm-8 col-lg-10">
                                <input onChange={this.handleChange} type="text" className="form-control" placeholder="Nombre de la mascota" name="mascota"/>
                             </div>
                         </div>




                         <div className="form-group row">
                             <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                 Nombre Dueño
                             </label> 
                             
                             <div className="col-sm-8 col-lg-10">
                                <input onChange={this.handleChange} type="text" className="form-control" placeholder="Nombre del propietario de la mascota" name="propietario"/>
                             </div>
                         </div>



                         <div className="form-group row">
                             
                             <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                 Fecha
                             </label> 
                             
                             <div className="col-sm-8 col-lg-4">
                                <input onChange={this.handleChange} type="date" className="form-control" name="fecha"/>
                             </div>

                             <label htmlFor="" className="col-sm- 4 col-lg-2 col-form-label">
                                 Hora
                             </label> 
                             
                             <div className="col-sm-8 col-lg-4">
                                <input onChange={this.handleChange} type="time" className="form-control" name="hora"/>
                             </div>

                         </div>



                         <div className="form-group row">
                             <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                 Síntomas
                             </label> 
                             
                             <div className="col-sm-8 col-lg-10">
                                <textarea onChange={this.handleChange} className="form-control" name="sintomas" placeholder="Describe los síntomas"></textarea>
                             </div>
                         </div>



            <input value="AGREGAR NUEVA CITA" type="submit" className="py-3 mt-2 btn btn-success btn-block"/>



                    </form>

                </div>
            </div>
        );
    }
}

export default NuevaCita;