import { useState } from "react"
import { useForm } from "../hooks/useForm";

const Generador = () => {

  const generador = {
    upp:false,
    low:false,
    num:false,
    sym:false
  }
  const upper= "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const lower= "abcdefghijklmnñopqrstuvwxyz";
  const numero= "0123456789";
  const simbolo= "/*-+!#$%&/=?¡¿|°-_<>";

  const [inputs, handleVariable, reset]=useForm(generador);
  const {upp,low,num,sym}=inputs;

  const [largo,setLargo]=useState(0);
  const [pass,setPass]=useState("");
  const [shield]=useState([0,"bi bi-shield text-danger","bi bi-shield text-warning","bi bi-shield text-success",0]);

  const handleLargo=(e)=>{
    setLargo(e.target.value)
    shield[4]=e.target.value;
  }

  const generadorPass=(item)=>{
    let aleatoria = "";
    for (let i = 0; i < largo; i++) aleatoria += item.charAt(Math.floor(Math.random() * item.length));
    return setPass(aleatoria)
  }

  const handleEnviar = (e)=>{
    e.preventDefault();
    let banco="";
    let contador=0;
    if (upp) {
      banco+=upper;
      contador+=1;      
    }
    if (low) {
      banco+=lower; 
      contador+=1;      
      }
    if (num) {
      banco+=numero; 
      contador+=1;      
      }
    if (sym) {
      banco+=simbolo; 
      contador+=1;      
      }
      generadorPass(banco);
      
    shield[0]=contador;
    
    
    //reset();
  }
  const handleCopy = (e) => {
    navigator.clipboard.writeText(pass)
  } 


  return (
    <div className="bg-black d-flex justify-content-center">
        <div className="bg-dark d-flex justify-content-center flex-column align-content-center mt-2 p-4">
            <h6 className="text-light">PASSWORD GENERATOR</h6>


            <div className="input-group d-flex">
                <input type="text" placeholder="P4$W0rD!" value={pass} className="form-control mt-3 bg-dark text-light rounded-2" disabled/>  
                <button className="input-group-text mt-3 bg-dark text-light rounded-2" onClick={handleCopy} ><i className="bi bi-clipboard" /></button>
            </div>

          <form onSubmit={handleEnviar}>


                <div className="bg-dark text-light mt-3">
                      <div className="bg-dark d-flex justify-content-around align-items-center">
                          <h6>Character Length</h6>
                          <h2 className="text-success">{largo} </h2>
                      </div>
                          <input type="range" className="form-range" value={largo} step="1" min={0} max={20}  onChange={handleLargo}/>        
                </div> 
      
              

                <div className="form-check text-light">
                  <input className="form-check-input me-4" type="checkbox" id="upper" name="upp" checked={upp}  onChange={handleVariable}/>
                  <label className="form-check-label me-4" htmlFor="upper">Include Uppercase Letters</label>
                </div>
                <div className="form-check text-light">
                  <input className="form-check-input me-4" type="checkbox" id="lower" name="low" checked={low}  onChange={handleVariable}/>
                  <label className="form-check-label" htmlFor="lower">Include Lowercase Letters</label>
                </div>
                <div className="form-check text-light">
                  <input className="form-check-input me-4" type="checkbox" id="num" name="num" checked={num}  onChange={handleVariable}/>
                  <label className="form-check-label" htmlFor="num">Include Numbers</label>
                </div>
                <div className="form-check text-light">
                  <input className="form-check-input me-4" type="checkbox" id="sym" name="sym" checked={sym}  onChange={handleVariable}/>
                  <label className="form-check-label" htmlFor="sym">Include Symbols</label>
                </div>

                <div className="bg-black my-4 text-secondary d-flex justify-content-around align-items-center">
                  <h6 className="m-4">STRENGTH</h6>
                  <h3><i className={(shield[0]>3&&shield[4]>15?shield[3]:""||(shield[0]>2&&shield[4]>10?shield[2]:shield[1]))}></i></h3>
                </div>

                <button className="btn btn-success w-75 mx-4 "> GENERATE ➡</button>

          </form>

      </div>
    </div>
  )
}

export default Generador