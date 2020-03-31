import React, { Component } from 'react'
import Fecha from './Fecha.js'

export default class Tarea extends Component {

  vacio = (elemento) => {
    return (elemento === '')
  }

  validarFecha = (fecha1, fecha2) => {
    if (fecha1 <= fecha2) {
      console.log('Validate');
      console.log(fecha1);
      console.log(fecha2);
      return true
    } else {
      return false
    }
  }

  onClick = () => {
    const actividad = document.getElementById('actividad').value;
    const fechaI = document.getElementById('fecha_ini').value;
    const fechaF = document.getElementById('fecha_fin').value;
    if (this.vacio(actividad) ||
        this.vacio(fechaI)  ||
        this.vacio(fechaF)  ) {
          alert('Debes llenar todos los campos !')
          return
    }
    if (!this.validarFecha(fechaI, fechaF)) {
      console.log(this.validarFecha(fechaI, fechaF));
      alert('Fechas Inválidas')
      return
    }
    const tarea = {
      nombre : actividad,
      dateIni : fechaI,
      dateFin : fechaF
    }
    document.getElementById('actividad').value = '';
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
                <Fecha id="fecha_ini" sendChange={this.sendChange}/>
            </div>
            <label className="sr-only">Fecha Fin</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <span className='fa fa-calendar pt-1 pr-1' ></span>
              <Fecha id="fecha_fin" sendChange={this.sendChange}/>
            </div>
            <div className='fa fa-plus-circle' onClick={this.onClick}></div>
            </form>
      </div>
    )
  }
}
