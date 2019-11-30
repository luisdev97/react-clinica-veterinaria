import React from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends React.Component {
    
  state = {
    citas: []
  }


  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    console.log(citasLS);
    if(citasLS)
      this.setState({
        citas: JSON.parse(citasLS)
      });
  }

  componentDidUpdate(){
    console.log('se actualizara');
    localStorage.setItem('citas',JSON.stringify(this.state.citas));
  }

  crearCita = datos => {
      const citas = [...this.state.citas, datos];
      this.setState({ citas });
  }

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita => cita.id !== id);
    this.setState({ citas });
  }

  render(){
      return ( 
        <div className="container">
          <Header titulo="Clinica veterinaria"/>

          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita crearCita={this.crearCita}/>
            </div>
          </div>

        <div className="mt-5 col-md-10 mx-auto">
          <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita}/>
        </div>

        </div> 
      );
    }
   
}

export default App;