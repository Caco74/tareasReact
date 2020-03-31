import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Tarea from './Tarea.js'
import Check from './Check.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: this.props.tasks
    }
  }

  addTask = (task) => {
    this.setState((prevState) => {
      console.log(prevState);
      console.log(task);
      const tempTarea = prevState.task
      tempTarea.push(task)
      return { task: tempTarea}
    })
  }

  check = (e) => {
    console.log(e);
    alert('Check!')
  }
  close = (e) => {
    console.log(e);
    alert('Close!')
  }

  render() {
    const tareasIniciales = this.state.task.map((task, index) => {
      return (
        <div className="row p-2 justify-content-center" id={index+1} key={index}>
          <div className="col-4 text-success">{'# ' + task.nombre}</div>
          <div className="col-2">{task.dateIni}</div>
          <div className="col-2">{task.dateFin}</div>
          <Check active={task.complete}></Check>
          <div className="col-1" onClick={this.close}><a href="/#" className="text-dark"><i className="fa fa-times fa-lg float-left"></i></a></div>
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
