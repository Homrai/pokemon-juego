import { useState } from "react";
import {useForm} from "../hooks/useForm";
// import { v4 as id } from 'uuid';
import nextId from "react-id-generator";
import { useEffect } from "react";

const Notificaciones = () => {

  const msj = {
    id:nextId(),
    nombre:"",
    mensaje:"",
    leido:false,
    imagen:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    fecha: Date(),
  }

  const [mensajes,setMensajes]=useState([]);

  const [inputs, handleVariable, reset] = useForm(msj);
  const {nombre, mensaje, leido, fecha, imagen}=inputs;
  const [notificaciones,setNotificaciones]= useState(0);
  const numeroNotificaciones= ()=>{
    const notificacion= mensajes.filter((item)=>item.leido!==true);
    setNotificaciones(notificacion.length)
  }
  
  useEffect(()=>{
    numeroNotificaciones();
  },[mensajes]);

  const agregarMensaje= (itemMensaje)=>{
    setMensajes((old)=>[...old, itemMensaje]);
    
  }


  const marcarLeido=(id)=>{
    const editar= mensajes.map((item)=>{
      if (item.id=== id) {
        return {...item, leido:true}
      }
      return item
    });
    setMensajes(editar)
  }
  

  const marcarLeidoTodo=()=>{
    const editar= mensajes.map((item)=>({...item, leido:true}));
    setMensajes(editar);
  } 
  
  
  const handleEnvio = (e)=>{
    e.preventDefault();
    agregarMensaje(inputs);
    reset();
  }


  return (
    <div className="d-flex flex-lg-row flex-column row-cols-12 mt-3">
      <div className="border-3 p-lg-5 col-lg-4 mx-lg-1 mx-5 col-sm-10" >
        <form onSubmit={handleEnvio}>

              <select name="imagen" className="my-3 bg-dark text-light w-100" onChange={handleVariable} defaultValue="default" >
                    <option value="default">seleccione avatar...</option>
                    <option value="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp">👧</option>
                    <option value="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp">👩</option>
                    <option value="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp">🧑</option>
                    <option value="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp">👨</option>
              </select>

            <input className="input-group rounded-3 mb-3 bg-dark text-light p-1" type="text" name="nombre" placeholder="Nombre..." maxLength="12"
                  onChange={handleVariable}
                  value={nombre}
                  />

            <textarea className="input-group rounded-3 bg-dark text-light p-1 textArea" name="mensaje" cols="40" rows="10" placeholder="Ingrese su mensaje... max 380 caracteres..." maxLength="380" 
                    onChange={handleVariable}
                    value={mensaje}
                    ></textarea>

            <button className="btn btn-outline-success mt-3 border-0 bi bi-send"> </button>
            
        </form>
      </div>
      <div className="border-3 p-1 rounded-3 col-lg-7 mx-lg-1 mx-5 col-sm-10">

        <div className="d-flex justify-content-between">

          <div className="d-flex">
                <h3>Notifications</h3> 
                <button className="ms-3 bg-danger rounded-5 px-2 text-light">{notificaciones}</button>
                <button className="btn btn-outline-dark border-0" onClick={marcarLeidoTodo}>Mark all as read</button>
          </div>

        </div>


        {mensajes.map((item)=>(
          
                <div className={item.leido? "rounded-3 mb-1 d-flex align-items-start bg-light flex-wrap":"rounded-3 mb-1 d-flex align-items-start bg-at flex-wrap"} onClick={()=>marcarLeido(item.id)}  key={item.id}>
        
                          <img src={item.imagen} className="rounded-circle shadow-4 img-tamaño" alt="Avatar"/>
              
                          <div className="d-flex align-items-end">
                              <h3>{item.nombre}</h3>
                              <h5 className="ms-1">{item.mensaje.length<30?item.mensaje:item.mensaje.substring(0, 40)+ "...." }</h5>
                              {item.leido? "":<h6>🛑</h6>}
                          </div>
                          <div className="text-primary align-self-end">{item.fecha.substring(0, 27)}</div>
                          
        
                </div>
                 
        ))}      
      </div>
    </div>
  )
}

export default Notificaciones