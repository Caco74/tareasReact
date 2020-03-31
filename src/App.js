import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Tarea from './Tarea.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: this.props.tasks
    }
  }

  addTask = (task) => {
    this.setState((prevState) => {
      const tempTarea = prevState.task
      tempTarea.push(task)
      return { task: tempTarea}
    })
  }

  render() {
    const tareasIniciales = this.state.task.map((task, index) => {
      return (
        <div className="row p-1" id={index+1} key={index}>
          <div className="col-5 border offset-2">{'# ' + task.nombre}</div>
          <div className="col-1 offset-1 border">{task.dateIni}</div>
          <div className="col-1 border">{task.dateFin}</div>
        </div>
      )
    });
    return (
      <div className="conteiner-fluid border rounded m-2">
        <div className='row border-bottom m-0' >
          <div className='col-12 h1 text-center'>Lista de Tareas | Proyecto Marzo 2020</div>
        </div>
        {tareasIniciales}
        <Tarea addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
