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
      console.log(prevState);
      console.log(task);
      const tempTarea = prevState.task
      tempTarea.push(task)
      return { task: tempTarea}
    })
  }

  removeTask = (index) => {
    console.log('Elemento a remover ' + index);
    this.setState((prevState) => {
      const tempTasks = prevState.task
      console.log(tempTasks);
      tempTasks.splice(index,1)
      return {task: tempTasks}
    })
  }

  completeTask = (index) => {
    const tempTasks = this.state.task;
    console.log(tempTasks);
    tempTasks[index].complete = true
    this.setState({task: tempTasks})
  }

  manejoOnClick = (e, index) => {
    console.log(e);
    console.log(index);
    if (e.target.id === 'remove') this.removeTask(index)
    else if (e.target.id === 'complete') this.completeTask(index)
  }

  render() {
    const tareasIniciales = this.state.task.map((task, index) => {
      let styleStatus = ''
      styleStatus = task.complete ? 'text-success' : styleStatus;
      return (
        <div className="row p-2 justify-content-center" id={index+1} key={index}>
          <div className={"col-4 " + styleStatus}>{'# ' + task.nombre}</div>
          <div className={"col-2 " + styleStatus}>{task.dateIni}</div>
          <div className={"col-2 " + styleStatus}>{task.dateFin}</div>
          <div className="col-1" onClick={(e) => this.manejoOnClick(e, index)}><a href="/#" className="text-dark" ><i className="fa fa-check float-right" id='complete'></i></a></div>
          <div className="col-1" onClick={(e) => this.manejoOnClick(e, index)}><a href="/#" className="text-dark" ><i className="fa fa-times float-left" id='remove'></i></a></div>
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
