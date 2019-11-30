import React from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';


class App extends React.Component {
    
  state = {
    citas: []
  }

  crearCita = datos => {
      const citas = [...this.state.citas, datos];
      this.setState({ citas });
  }

  render(){
      return ( 
        <div className="container">
          <Header titulo="Clinica veterinaria"/>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita crearCita={crearCita}/>
            </div>
          </div>
        </div> 
      );
    }
   
}

export default App;