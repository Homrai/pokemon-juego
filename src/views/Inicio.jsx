import React from 'react'

const Inicio = () => {
  return (
    <div className=' container d-flex flex-column justify-content-center border border-dark rounded-3 border-3 my-5'>
        <h1 className='align-self-center'>Bienvenido!!!</h1>
        <h4 className='align-self-center'>En esta página encontrarás 3 aplicaciones.</h4>
        <ul className="list-group">
            <li className="list-group-item list-group-item-success">Game: Juego de encontrar pares de tarjetas, tiene tutorial y varias opciones de juego.</li>
            <li className="list-group-item list-group-item-primary">Notifications: es una aplicación que simula las notificaciones recibidas por redes sociales,
                                                                tiene dos partes, la primera para enviar mensajes, donde se selecciona una imagen, nombre y el mensaje de texto,
                                                                y la segunda donde se muestran los mensajes y las opciones para marcarlos como revisados.</li>
            <li className="list-group-item list-group-item-secondary">Pass generator: Aplicación para generar un password aleatorio con diferentes opciones como: largo de la contraseña,
                                                                     letras mayúsculas o minúsculas, números y símbolos, también un icono que según el color 
                                                                     nos muestra que tan segura es la contraseña siendo:rojo débil, naranja medio y verde seguro.</li>
        </ul>
        <h4 className='align-self-center'>Esperamos que disfrutes la estadía en nuestra página y te sea de utilidad.</h4>
    </div>
  )
}

export default Inicio