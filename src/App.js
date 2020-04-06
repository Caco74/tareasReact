import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Tarea from './Tarea.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: this.props.tasks,
      editIndex: '',
      renAddTask: <Tarea addTask={this.addTask}/>
    }
  }

  addTask = (task) => {
    this.setState((prevState) => {
      const tempTarea = prevState.task
      tempTarea.push(task)
      return { task: tempTarea}
    })
  }

  removeTask = (index) => {
    this.setState((prevState) => {
      const tempTasks = prevState.task
      tempTasks.splice(index,1)
      return {task: tempTasks}
    })
  }

  completeTask = (index) => {
    const tempTasks = this.state.task;
    tempTasks[index].complete = true
    this.setState({task: tempTasks})
  }

  editTask = (index) => {
    this.setState({
      editIndex: index,
      renAddTask: ''
    })
  }

  saveTask = (tarea) => {
    const tempTasks = this.state.task;
    tempTasks[tarea.index]=tarea;
    this.setState({
      task: tempTasks,
      editIndex: '',
      renAddTask: <Tarea addTask={this.addTask} />
    })
  }

  manejoOnClick = (e, index) => {
    if (e.target.id === 'remove') this.removeTask(index)
    else if (e.target.id === 'complete') this.completeTask(index)
    else if (e.target.id === 'edit') this.editTask(index)
  }

  render() {
    const tareasIniciales = this.state.task.map((task, index) => {
      let styleStatus = ''
      let f = new Date()
      let mes = (f.getMonth() + 1 ).toString()
      if (mes.length <= 1) {
        mes = '0'+mes
      }
      let dia = f.getDate().toString()
      if (dia.length <= 1) {
        dia = '0'+dia
      }

      let fecha_actual = mes + "/" + dia + "/" + f.getFullYear()
      let dateHoy = Date.now();
      let datoI = task.dateIni
      let datoF = task.dateFin
      let parseI = Date.parse(datoI)
      let parseF = Date.parse(datoF)
      styleStatus = parseF < dateHoy  ? 'text-danger': styleStatus;
      styleStatus = (parseI > dateHoy ) ? 'text-secondary': styleStatus;
      styleStatus = (parseI < dateHoy ) && (parseF > dateHoy) ? 'text-primary': styleStatus;
      styleStatus = datoF === fecha_actual ? 'text-warning': styleStatus;
      styleStatus = task.complete ? 'text-success' : styleStatus;

      const edit = this.state.editIndex === index ? <div ><Tarea saveTask={this.saveTask} index={index} task={task}/></div> : '';

      return (
        <div className="row m-0 justify-content-center" id={index+1} key={index}>
          <div className={"col-lg-5 col-md-3 border-bottom " + styleStatus} id={'task ' + (index + 1)}>{'# ' + task.nombre}</div>
          <div className={"col-lg-2 col-md-2 border-bottom " + styleStatus} id={'dateIni ' + (index + 1)}>{task.dateIni}</div>
          <div className={"col-lg-2 col-md-2 border-bottom " + styleStatus} id={'dateFin ' + (index + 1)}>{task.dateFin}</div>
          <div className="col-lg-1 col-md-5 border-bottom p-0" onClick={(e) => this.manejoOnClick(e, index)}>
            <a href="/#" className="text-dark" ><i className="fa fa-check float-left ml-2" id='complete'></i></a>
            <a href="/#" className="text-dark" ><i className="fa fa-times float-left ml-2" id='remove'></i></a>
            <a href="/#" className="text-dark" ><i className="fa fa-pencil float-left ml-2" id='edit'></i></a>
          </div>
          {edit}
        </div>
      )
    });
    return (
      <div className="conteiner-fluid border rounded m-2 contenedor">
        <div className='row border-bottom m-0' >
          <div className='col-md-12 text-center d-none d-sm-none d-md-block'>
            <h1>Lista de Tareas | Proyecto Marzo 2020</h1>
          </div>
          <div className=' col-sm-12 text-center d-block d-sm-block d-md-none'>
            <h5>Lista de Tareas | Proyecto Marzo 2020</h5>
          </div>
        </div>
        {tareasIniciales}
        {this.state.renAddTask}
      </div>
    );
  }
}

export default App;
