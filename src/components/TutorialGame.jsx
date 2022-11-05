import { useState } from 'react';

const TutorialGame = () => {
    const [ventana, setVentana]=useState(0);

    const handleCambioVentana=(e)=>{
        const flecha=Number(e.target.value);
        setVentana((old)=>old+flecha);
    }

  return (
    <>
            <div className={`bg-light rounded-4 d-flex align-items-center justify-content-between`}>

                <div className="col-md-1">
                    <button className='bi bi-arrow-left btn btn-outline-dark' value={-1} disabled={ventana===0} onClick={handleCambioVentana}>  </button>
                </div>

                <div className={`col-md-8 ${ventana!==0?"invisible":""}`}  >
                    <img src={require('../img/img Tutorial/menu1.png')} className={"w-100"}/>  
                </div>

                <div className={`col-md-10 ${ventana!==1?"invisible":""}`}  >
                    <img src={require('../img/img Tutorial/menu2.png')} className={"w-100"}/>  
                </div>

                <div className={`col-md-10 ${ventana!==2?"invisible":""}`}  >
                    <img src={require('../img/img Tutorial/menu3.png')} className={"w-100"}/>  
                </div>

                <div className={`col-md-10 ${ventana!==3?"invisible":""}`}  >
                    <img src={require('../img/img Tutorial/menu4.png')} className={"w-100"}/>  
                </div>

                <div className={`col-md-10 ${ventana!==4?"invisible":""}`}  >
                    <img src={require('../img/img Tutorial/menu5.png')} className={"w-100"}/>  
                </div>

                <div className={`col-md-10 d-flex flex-column justify-content-center ${ventana!==5?"invisible":""}`}  >
                    <img src={require('../img/img Tutorial/menu6.png')} className={"w-100"}/>
                </div>

                <div className="col-md-1">
                    <button className='bi bi-arrow-right btn btn-outline-dark' value={1} disabled={ventana===5} onClick={handleCambioVentana}> </button>
                </div> 

            </div>
    </>
  )
}

export default TutorialGame