import React, { Component } from 'react'
import Fecha from './Fecha.js'







export default class Tarea extends Component {

  vacio = (elemento) => {
    return (elemento === '')
  }

  validarFecha = (fecha) => {
      const fechaM = fecha
      console.log(fechaM + 'Validación');
      if (fechaM) {
        return true
      } else {
        return false
      }
  }

  onClick = () => {
    const actividad = document.getElementById('actividad').value;
    const fechaI = document.getElementById('fecha_ini').value;
    const fechaF = document.getElementById('fecha_fin').value;

    console.log(document.getElementById('actividad').value);
    console.log(document.getElementById('fecha_ini').value);
    console.log(document.getElementById('fecha_fin').value);


    console.log('addTask');

    if (this.vacio(actividad) ||
        this.vacio(fechaI)  ||
        this.vacio(fechaF)  ) {
          alert('Debes llenar todos los campos !')
          return
    }

    this.validarFecha(fechaI)
    this.validarFecha(fechaF)
    const tarea = {
      nombre : actividad,
      dateIni : fechaI,
      dateFin : fechaF
    }
    console.log(tarea);
    // this.setState({
    //   task: tarea
    // })
    document.getElementById('actividad').value = '';
    document.getElementById('fecha_ini').value = null;
    document.getElementById('fecha_fin').value = null;
    this.props.addTask(tarea)
  }

  render() {
    return (
      <div className='m-2' >
        <form className="form-inline">
            <label className="sr-only">Tarea</label>
            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0"
            id="actividad" placeholder="Tarea"/>

            <label className="sr-only">Fecha inicio</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <span className='fa fa-calendar pt-1 pr-1' ></span>
                <Fecha id="fecha_ini"/>
            </div>

            <label className="sr-only">Fecha Fin</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <span className='fa fa-calendar pt-1 pr-1' ></span>
              <Fecha id="fecha_fin"/>
            </div>
            <div className='fa fa-plus-circle' onClick={this.onClick}></div>
            </form>
      </div>
    )
  }
}
