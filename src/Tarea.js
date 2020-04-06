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
      dateFin : fechaF,
      complete: false,
      index: this.props.index
    }
    document.getElementById('actividad').value = '';
    if (this.props.addTask) {
      this.props.addTask(tarea)
    } else if (this.props.saveTask) {
      this.props.saveTask(tarea)
    }
  }

  componentDidMount() {
    if (this.props.task) {
      document.getElementById('actividad').value = this.props.task.nombre
      document.getElementById('fecha_ini').value = this.props.task.dateIni
      document.getElementById('fecha_fin').value = this.props.task.dateFin
    }
  }

  displayFocus = () => {
    let elem = document.getElementById('actividad')
    elem.setAttribute('placeholder', 'Tarea a realizar ..')
  }

  render() {
    let cancelButton = ''
    let icon = 'fa-plus-circle fa-lg'
    if (this.props.task) {
      icon = 'fa-edit fa-lg'
      cancelButton = <div className="border fa fa-ban pl-1" onClick={this.onClick}></div>
    }
    return (
        <div className="form-row m-2 mt-4 justify-content-center" id={this.props.id}>
          <div className="col-lg-3 col-md-3">
            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0"
            id="actividad" placeholder="Tarea" onFocus={this.displayFocus}/>
          </div>
          <div className="col-lg-3 col-md-3">
                <span className='fa fa-calendar pt-1 pr-1' ></span>
                <Fecha id="fecha_ini"/>
          </div>
          <div className="col-lg-3 col-md-3">
              <span className='fa fa-calendar pt-1 pr-1' ></span>
              <Fecha id="fecha_fin"/>
          </div>
          <div className="col-lg-1 col-md-1">
            <a href="/#" onClick={this.onClick} className="text-dark"><i className={"fa " + icon}></i></a>
          </div>
          {cancelButton}
        </div>
    )
  }
}
