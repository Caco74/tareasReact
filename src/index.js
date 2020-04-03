import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

const tareas = [
  { nombre: 'Tarea 1', dateIni: '08/19/2018', dateFin: '08/20/2018', complete: true },
  { nombre: 'Tarea 4 - Azul', dateIni: '04/01/2020', dateFin: '04/09/2020', complete: false },
  { nombre: 'Tarea 2 - Rojo', dateIni: '10/23/2018', dateFin: '10/29/2018', complete: false },
  { nombre: 'Tarea 3 - Gris', dateIni: '06/02/2020', dateFin: '06/20/2020', complete: false },
  { nombre: 'Tarea 5 - Amarillo', dateIni: '04/01/2020', dateFin: '04/03/2020', complete: false }
]

ReactDOM.render(<App tasks={tareas} />, document.getElementById('root'));
registerServiceWorker();
