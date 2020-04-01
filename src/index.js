import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

const tareas = [
  { nombre: 'Tarea 1', dateIni: '19/08/2018', dateFin: '20/08/2018', complete: true },
  { nombre: 'Tarea 2', dateIni: '23/10/2018', dateFin: '29/10/2018', complete: false },
  { nombre: 'Tarea 3', dateIni: '02/06/2019', dateFin: '20/06/2019', complete: false }
]

ReactDOM.render(<App tasks={tareas} />, document.getElementById('root'));
registerServiceWorker();
