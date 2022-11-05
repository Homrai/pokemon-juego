import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Notificaciones from './views/Notificaciones';
import Generador from './views/Generador';
import Juego from './views/Juego';
import Error from './components/Error';
import Inicio from './views/Inicio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Inicio/>} />
          <Route path='notificaciones' element={<Notificaciones/>} />
          <Route path='generador' element={<Generador/>} />
          <Route path='juego' element={<Juego/>} />

          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);