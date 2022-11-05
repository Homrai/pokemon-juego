import { useEffect, useState } from "react";
import {ArraysGame} from "../components/ArraysGame";
import nextId from "react-id-generator";
import TutorialGame from "../components/TutorialGame";

const Juego = () => {


  //arrays que se traen desde otro componente para no ocupar tanto espacio
  const [jugadoresTotal, iconsSmall, iconsLarge, numbersSmall, numbersLarge]=ArraysGame();
  //theme, grid y players son las opciones del menu principal
  const [theme,setTheme] =useState("numbers");
  const [grid,setGrid]=useState("4x4");
  //se usa para guardar el objeto en el ranking
  const [nombre, setNombre]=useState("");




  const [players,setPlayers]=useState(1);
  //ventana es para ocultar los divs que no se esten usando (menu principal, el juego, los resultados)
  const [ventana, setVentana]= useState(0);


  //contabiliza los movimientos para cambiar de jugador
  const [contador,setContador]=useState(0);
  //verificar que dentro de tab1 ya esten todos los botones jugados del juego
  const [juegoCompletado, setJuegoCompletado]=useState(0);



  //guarda el tiempo de juego
  const [tiempoJuego, setTiempoJuego]= useState(180);
  //constante para arranque del tempirizador
  const [activadorTiempo, setActivadorTiempo]=useState(0);
  //se guarda el tiempo al finalizar la partida
  const [tiempoFinish, setTiempoFinish]=useState(0);

  //se guarda el numero de jugadores en la partida
  const [jugadoresActivos,setJugadoresActivos]=useState([]);
  //este es el array donde se guardan los botones para voltear en el juego
  const [tab1, setTab1]=useState([]);

  const [volteos, setVolteos]=useState(["asd"]);

  //se guardan y organizan los puntajes de tab1 de mayor a menor para mostrar los resultados
  const [tablaPuntuacion, setTablaPuntuacion]=useState([]);

  //se guarda el record del local storage de 4x4 y 6x6
  const [ranking,setRanking]= useState([]);
  const [ranking2,setRanking2]= useState([]);
  
  //se guardan los turnos al voltear cada opcion
  const [opcionNumero1, setOpcionNumero1]=useState([]);
  const [opcionNumero2, setOpcionNumero2]=useState([]);
  
  //validacion para guardar el record
  const [agregarNuevoRecord,setAgregarNuevoRecord]=useState(false);

  //validacion de la pantalla game over si termina el tiempo de juego
  const [gameOver, setGameOver]=useState(false);


  //descarga del local storage los datos del record de 4x4 y 6x6
  useEffect(()=>{
    const rank = JSON.parse(localStorage.getItem("ranking"))||[];
    //console.log(rank);
    if (rank.length===0) {
        return
    }
    setRanking(rank);

    const rank2 = JSON.parse(localStorage.getItem("ranking2"))||[];
    //console.log(rank2);
    if (rank2.length===0) {
        return
    }
    setRanking2(rank2);
  },[]);


  //guarda los datos del ranking 4x4 en el local storage
  useEffect(()=>{
    localStorage.setItem("ranking", JSON.stringify(ranking));
  },[ranking]);

  //guarda los datos del ranking 6x6 en el local storage
  useEffect(()=>{
    localStorage.setItem("ranking2", JSON.stringify(ranking2));
  },[ranking2]);



  //se ejecuta al voltear un par de elementos en el juego
  useEffect(()=>{
    //ejecuta el codigo pasado 1 segundo
    setTimeout(() => {
        //valida que las opciones no esten vacias
        if (opcionNumero1.length!==0 && opcionNumero2.length!==0) {

            //valida que ambas opciones tengan el mismo valor
            if (opcionNumero1[1]===opcionNumero2[1]) {
                //verificacion para saber si el juego ya termino, usando la cantidad de elementos en tab1 y el numero de aciertos
                const largoArray=tab1.length/2;
                const completo= juegoCompletado+1;
                setJuegoCompletado(completo);
                //cambia de color los aciertos para que se desactiven y no se puedan jugar
                const nuevoTab = tab1.map((item)=>{
                    if (item.id===Number(opcionNumero1[0])|| item.id===Number(opcionNumero2[0])) {
                        item.activo=true;
                        item.boton="boton-ganado"; 
                        setVolteos((old)=>[...old, item])
                        return item 
                    }
                    if (volteos.includes(item)) {
                        item.activo=true;
                        item.boton="boton-ganado";
                        return item
                    }          
                    item.activo=false;
                    return item
                })
                //envia el acierto para aumentar los puntos de cada jugador por medio de contador
                puntosGanados(contador);
                //se vacian las opciones para voltear otra pareja
                setOpcionNumero1([]);
                setOpcionNumero2([]); 
                //se envia el nuevo array para actualizar los datos
                setTab1(nuevoTab);
                //validacion para saber si el juego ya termino para enviar a la tabla de resultados
                if (completo===largoArray) {
                    setJuegoCompletado(0);
                    setTiempoFinish(tiempoJuego);
                    records(tiempoJuego);
                    //valida el numero de jugadores para mostrar la pantalla correspondiente al terminar el juego
                    if (players!==1) {
                        setVentana(2);
                    } else {
                        setVentana(3);                        
                    }
                    setGameOver(false);
                    setTiempoJuego(180);
                }
                //se ejecuta para organizar los datos de mayor a menor segun el puntaje
                gameFinish();
                return 
            }else{
                //cambio de jugador por medio de contador
                const cont = contador+1;
                if (cont<jugadoresActivos.length) {
                    setContador(cont);
                    cambioDeJugador(cont);
                    //console.log(contador, jugadoresActivos.length-1);  
                }else{
                    setContador(0);
                    cambioDeJugador(0);
                    //console.log("el contador ahora es:  "+contador);
                }
                
                
                //cuando el jugador no acierta actualiza el array tab1 para volver a su forma original los elementos jugados
                const nuevoTab = tab1.map((item)=>{
                    if (volteos.includes(item)) {
                        item.activo=true;
                        item.boton="boton-ganado";
                        return item
                    }
                    if (item.id===Number(opcionNumero1[0])|| item.id===Number(opcionNumero2[0])) {
                        item.boton="boton-inactivo";            
                    }
                    item.activo=false;
                    return item
                })
                setTab1(nuevoTab); 
  
                //reinicio de las opciones
                setOpcionNumero1([]);
                setOpcionNumero2([]); 
                return 
            }
        } 
    }, 1000);
  },[opcionNumero1&&opcionNumero2]);


  //aumenta los puntos de los jugadores
  const puntosGanados=(cont)=>{
    const jugadores = jugadoresActivos.map((item,index)=>{
        if (index===cont) {
            //console.log("entro a array de puntos ganados"+item.activo);
            item.puntaje+=1;
            return item                       
        }
        return item
    });

    setJugadoresActivos(jugadores);
  }


  //actualiza el array para cambiar de jugador
  const cambioDeJugador=(cont)=>{
    const jugadores = jugadoresActivos.map((item,index)=>{
        if (index===cont) {
            //console.log("entro a array de jugadores"+item.player);
            item.activo=true;
            return item                       
        }
        item.activo=false;
        return item
    });

    setJugadoresActivos(jugadores);
  }

  //se validan las opciones del menu principal para comenzar la partida
  const ventanaInicioPartida =()=>{
    if (jugadoresActivos.length===1) {
        setGameOver(true);
        setTiempoJuego(180);        
    }
    if (grid==="4x4") {
      if (theme==="numbers") {
        //se organiza el array tab1 de forma aleatoria segun las opciones dadas en el menu principal trayendo un array diferente
          let array1= numbersSmall.sort(()=> {return Math.random() - 0.5})
          setTab1(array1);
      }else{
        let array1= iconsSmall.sort(()=> {return Math.random() - 0.5})
        setTab1(array1);
      }     
    }
    if (grid==="6x6") {
      if (theme==="numbers") {
        let array1= numbersLarge.sort(()=> {return Math.random() - 0.5})
        setTab1(array1);

      }else{
        let array1= iconsLarge.sort(()=> {return Math.random() - 0.5})
        setTab1(array1);
        }
    }
}


  //regresa al menu principal reiniciando tab1 por medio de ventana
  const menuPrincipal=()=>{
    setTiempoJuego(180);
    setTab1([]);
    setVentana(0);
  }


  //opcion de tema en el menu principal
  const handleSelectTheme=(e)=>{
      let tema= e.target.value;
      setTheme(tema)
  }


  //opcion de jugadores en el menu principal
  const handleSelectPlayers=(e)=>{
      const numeroPlayers=Number(e.target.value);
      setPlayers(numeroPlayers);       
      }


  //opcion de tamaño del tablero en el menu principal
  const handleGridSize= (e)=>{
      let tam= e.target.value;
      setGrid(tam)
  }


  //se valida la cantidad de jugadores seleccionada por el usuario
  const handleEnviar=(e)=>{
    setJuegoCompletado(0);
    const play = jugadoresTotal.filter((item,index)=>{
            if (index<players) {
                if (index===0) {
                    item.activo=true;                    
                }
                return item
            }
        });
    setGameOver(true);
    //se reinicia el contador
    setContador(0);
    //se envia la cantidad de jugadores
    setJugadoresActivos(play);
    //se cambia la ventana a la del juego
    setVentana(1);
    //se validan las opciones del tablero
    ventanaInicioPartida();
  }



  //si es la primer opcion se actualizan los datos del array tab1 para que muestre la opcion seleccionada
  const cambiarArrayVerdadero= (array, boton)=>{
    const  nuevoTab = array.map((item)=>{
        if (volteos.includes(item)) {
            item.activo=true;
            item.boton="boton-ganado";
            return item
        }
        if (item.id===boton) {
            item.activo=true;
            item.boton="boton-activo";
            }
            return item
        });
    setTab1(nuevoTab); 

  }



  //si es la segunda opcion se actualizan los datos del array tab1 para que muestre la opcion seleccionada
  const cambiarArrayFalso= (array, boton)=>{
    const  nuevoTab = array.map((item)=>{
        if (volteos.includes(item)) {
            item.activo=true;
            item.boton="boton-ganado";
            return item
        }
        if (item.id===boton) {
            item.boton="boton-activo";
        }
        item.activo=true;
        return item
        });

    setTab1(nuevoTab);     
  }



  //funcion ligada a los botones de voltear del array tab1
  const handlePrimeraOpcion= (e)=>{
    if (players===1) {
        if (activadorTiempo===0) {
            setActivadorTiempo(1); 
            ContarTiempoJuego();
        }
    }
    //si es el segundo intento se guarda los parametros en la opcion 1 y se envian datos a la funcion
    if (opcionNumero1.length!==0) {
        //se agrega el segundo intento y envia los datos a la funcion
        setOpcionNumero2([e.target.id, e.target.value]);  
        cambiarArrayFalso(tab1, Number(e.target.id));

    } else {
        //si es el primer intento se guarda los parametros en la opcion 1 y se envian datos a la funcion
        setOpcionNumero1([e.target.id, e.target.value]); 
        cambiarArrayVerdadero(tab1, Number(e.target.id));
    } 

  }



  //se reinicia la partida con los mismos parametros antes seleccionados en el menu principal
  const handleRestart= ()=>{
    setTiempoJuego(180);
    setJuegoCompletado(0);
    handleEnviar();
  }



  //organiza los objetos en el array tabla de puntuacion de mayor a menor puntaje
  const gameFinish=()=>{
    const puntajeJugadores= jugadoresActivos.sort(((a, b) => b.puntaje - a.puntaje))
    setTablaPuntuacion(puntajeJugadores);
  }



  //funcion para llevar el tiempo en el juego de un jugador
  const ContarTiempoJuego=()=>{
    const tiempo= setInterval(() => {
        setTiempoJuego((tiempoJuego)=>{
            if (tiempoJuego===1) {
                clearInterval(tiempo);
                setTiempoJuego(180);
                setActivadorTiempo(0);
                console.log("Tiempo finalizado");
                if (gameOver===true && jugadoresActivos.length===1) {
                    setVentana(5);
                }
            }             
            return tiempoJuego-1});
    }, 1000);   
    }   


//valida para que aparezca la opcion de guardar record
const records=(tiempo)=>{
    //valida el tipo de tablero
    if (grid==="4x4") {
        //valida que tenga menos de 10 records guardados
        if (ranking.length<10) {
            setAgregarNuevoRecord(true);
            return
        }
        //si tiene mas de 10 se organiza de menor a mayor el array
        const rankOrganizadoDeMenorAMayor= ranking.sort(((a, b) => a.puntaje - b.puntaje));
        //valida el record del tiempo jugado actual con el ultimo del rankign
        if (rankOrganizadoDeMenorAMayor[0].tiempo<tiempo) {
            setAgregarNuevoRecord(true);
            return        
        }   
    }
    if (ranking2.length<10) {
        setAgregarNuevoRecord(true);
        return
    }

    const rankOrganizadoDeMenorAMayor= ranking2.sort(((a, b) => a.puntaje - b.puntaje));
    if (rankOrganizadoDeMenorAMayor[0].tiempo<tiempo) {
        setAgregarNuevoRecord(true);        
    }   
}


//se agrega el record
const handleAddRecord=()=>{
    setGameOver(false);
    //objeto para guardar los datos en el array ranking
    const newRecord={
        id:nextId(),
        nombre:nombre,
        tiempo:tiempoFinish,
        grid:grid
    };


    //valida dimensiones de tablero
    if (grid==="4x4") {
        if (ranking.length<=10) {
            //si no hay objetos guardados guarda el primero
            if (ranking.length===0) {
                const newArray=[newRecord];
                setRanking(newArray);
                setAgregarNuevoRecord(false); 
                setVentana(4);      
                return 
            }
            //si ya hay 10 objetos guardados reemplaza el que tenga menor tiempo y organiza el array de mayor a menor tiempo
            if (ranking.length===10) {
                const rankOrganizadoDeMenorAMayor= ranking.sort(((a, b) => a.tiempo - b.tiempo))
                .map((item,index)=>{
                    if (index===0) {
                        item.nombre= newRecord.nombre;
                        item.tiempo= newRecord.tiempo;
                        item.grid= newRecord.grid;
                    }
                    return item               
                })
                .sort(((a, b) => b.tiempo - a.tiempo));
                setRanking(rankOrganizadoDeMenorAMayor);
                setAgregarNuevoRecord(false); 
                setVentana(4);
                return
            }
    
            setRanking((old)=>[...old, newRecord].sort(((a, b) => b.tiempo - a.tiempo)))
            setAgregarNuevoRecord(false);
            setVentana(4);   
            return 
        }     
    }
    //lo mismo que el array anterior
    if (ranking2.length<=10) {
        if (ranking2.length===0) {
            const newArray=[newRecord];
            setRanking2(newArray);
            setAgregarNuevoRecord(false); 
            setVentana(4);      
            return 
        }
        if (ranking2.length===10) {
            const rankOrganizadoDeMenorAMayor= ranking2.sort(((a, b) => a.tiempo - b.tiempo))
            .map((item,index)=>{
                if (index===0) {
                    item.nombre= newRecord.nombre;
                    item.tiempo= newRecord.tiempo;
                    item.grid= newRecord.grid;
                }
                return item               
            })
            .sort(((a, b) => b.tiempo - a.tiempo));
            setRanking2(rankOrganizadoDeMenorAMayor);
            setAgregarNuevoRecord(false); 
            setVentana(4);
            return
        }

        setRanking2((old)=>[...old, newRecord].sort(((a, b) => b.tiempo - a.tiempo)))
        setAgregarNuevoRecord(false);
        setVentana(4);
    }
    
}

//muestra la ventana de ranking
const mostrarRanking=()=>{
    setVentana(4);
}

//guarda el nombre del input
const handleNombre=(e)=>{
    setNombre(e.target.value)
}

return (
  <>
  <div className="d-flex justify-content-between">
  <button className="btn btn-outline-dark my-5" onClick={menuPrincipal} to="menu">Menu Principal</button>
  <button className="btn btn-outline-dark my-5" onClick={()=>setVentana(6)} to="menu">Tutorial</button>
  <button className="btn btn-outline-dark my-5" onClick={mostrarRanking} to="menu">Ranking</button>
  </div>
      <div className="d-flex justify-content-center align-items-center bg-black flex-column flex">
          <div className="d-flex justify-content-center align-items-center bg-black">
                    {/* ventana del menu principal */}
                  <div className={`bg-light py-md-4 rounded-4 my-5 d-flex flex-column justify-content-center ${ventana!==0?"invisible":""}`}>
                      <h6 className="ms-5 mt-3 ">Select Theme</h6>
                      <div className="row-12 d-flex mb-md-3 mb-sm-1">
                          <div className="col-6  d-flex justify-content-center">
                              <button className={theme==="numbers"?" boton-game-theme1 rounded-5 px-md-5 w-75":"boton-game-theme2 rounded-5 px-md-5 w-75"}
                                      value="numbers" onClick={handleSelectTheme}>Numbers</button>
                          </div>
                          <div className="col-6 d-flex justify-content-center">
                              <button className={theme==="icons"?"boton-game-theme1 rounded-5 px-md-5 w-75":"boton-game-theme2 rounded-5 px-md-5 w-75"} 
                                      value="icons" onClick={handleSelectTheme}>Icons</button>
                          </div>
                      </div>

                      <h6 className="ms-5  mt-3 me-4">Number of Players</h6>
                      <div className="row-12 d-flex justify-content-beetwen">
                          <div className="col-3 d-flex justify-content-end">
                              <button className={players===1?"boton-game-theme1 w-75 rounded-5 px-md-5  ":"boton-game-theme2 w-75 rounded-5 px-md-5   "} 
                                      value="1" onClick={handleSelectPlayers}>1</button>
                          </div>
                          <div className="col-3 d-flex justify-content-center">
                              <button className={players===2?"boton-game-theme1 w-75 rounded-5 px-md-5  mx-md-5":"boton-game-theme2 w-75 rounded-5 px-md-5  mx-md-5 mx-xs-3"} 
                                      value="2" onClick={handleSelectPlayers}>2</button>
                          </div>
                          <div className="col-3 d-flex justify-content-center">
                              <button className={players===3?"boton-game-theme1 w-75 rounded-5 px-md-5  m-xs-5":"boton-game-theme2 w-75 rounded-5 px-md-5  "} 
                                      value="3"   onClick={handleSelectPlayers}>3</button>
                          </div>
                          <div className="col-3 d-flex justify-content-end">
                              <button className={players===4?"boton-game-theme1 w-75 rounded-5 px-md-5   mx-md-5":"boton-game-theme2 w-75  rounded-5 px-md-5 mx-md-5"} 
                                      value="4"  onClick={handleSelectPlayers}>4</button>
                          </div>
                      </div>

                      <h6 className="ms-5  mt-3">Grid Size</h6>
                      <div className="row-12 d-flex mb-3">
                          <div className="col-6 d-flex justify-content-center">
                              <button className={grid==="4x4"?"boton-game-theme1 rounded-5 px-md-5 w-75":"boton-game-theme2 rounded-5 px-md-5 w-75"} 
                                      value="4x4" onClick={handleGridSize}>4x4</button>
                          </div>
                          <div className="col-6 d-flex justify-content-center">
                              <button className={grid==="6x6"?"boton-game-theme1 rounded-5 px-md-5 w-75":"boton-game-theme2 rounded-5 px-md-5 w-75"} 
                                      value="6x6" onClick={handleGridSize} >6x6</button>
                          </div>
                      </div>
                      <div className="row-12 d-flex mb-3 d-flex justify-content-center">
                          <button className="py-2 w-75 my-2 rounded-5 boton-start" onClick={handleEnviar}>Start Game</button>

                      </div>
                  </div>
                  
          </div>
          
            {/* ventana del juego */}
            <div className={`bg-light py-1 rounded-4 my-5 d-flex flex-column justify-content-center w-75 ${ventana!==1?"invisible":""}`}>
                <div className="d-flex justify-content-beetwen p-md-5 p-2  row-12">
                        <h4 className="col-sm-1 col-xs-4">memory</h4>
                        
                        <div className="col-sm-5 col-xs-1">
                        </div>
                        <div className="col-sm-1 col-xs-3">
                                <button className="rounded-5" onClick={handleRestart}>Restart</button>
                        </div>
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-3 col-xs-4 px-1">
                            <button className="rounded-5" onClick={menuPrincipal}>New Game</button>
                        </div>
                </div>
                
                <div className={`align-self-center bg-black w-75 d-flex justify-content-center p-md-3 p-sm-2 flex-wrap rounded-5 ${grid==="4x4"?"":"w-100"}`}>
                    {tab1.map((item)=>
                        <div className={`${grid==="4x4"?"col-3 d-flex justify-content-center px-lg-2 px-md-1 px-1 py-1":"col-2 py-1 px-1 "}`}>
                            <button key={item.id} 
                                    id={item.id}
                                    value={item.valor} 
                                    className={`rounded-5  font-size ${grid==="4x4"?"w-100 py-lg-4 py-3":"w-100 py-lg-4 py-2"} ${item.boton} ${item.icon?item.icon:""}`} 
                                    disabled={item.activo} 
                                    onClick={handlePrimeraOpcion}
                                    >
                                    {item.number?item.valor:""}
                                </button>
                        </div>
                        )}

                </div>

                <div className={`d-flex  ${players!==1?"justify-content-around":"justify-content-center"}`}>
                {players!==1?jugadoresActivos.map((item)=><div key={item.player} 
                        className={`${item.activo?"boton-start":"boton-game-theme2"} text-center px-lg-5 py-lg-3 px-md-3 px-sm-2 py-sm-1 py-md-2 rounded-3 my-2 d-flex flex-column`}>
                        <h5>Player {item.player}</h5>
                        <h1>{item.puntaje}</h1>
                        </div>)
                :<>
                    <div className={`boton-game-theme2 mx-3 px-md-5 px-3 py-2 align-self-center rounded-1 my-3 d-flex flex-column`}>
                        <h3>Tiempo</h3>
                         <h1 className="align-self-center">{tiempoJuego}</h1>
                    </div>
                    {jugadoresActivos.map((item)=>
                        <div key={item.player} className={`boton-game-theme2 mx-3 px-md-5 px-3 py-2  rounded-1 my-3 d-flex flex-column`}>
                            <h3>moves</h3>
                            <h1 className="align-self-center">{item.puntaje}</h1>
                        </div>
                    )}
                </>}
                </div>

            </div>
                {/* ventana de resultados multijugador */}
            <div className={`bg-light text-black d-flex flex-column px-md-5 px-1 py-md-4 py-1 w-md-50 rounded-4 my-5 align-items-center ${ventana!==2?"invisible":""}`}>
                {tablaPuntuacion[0]?<h1 className="py-4">Player {tablaPuntuacion[0].player} Wins!</h1>:""}
                        <h6 className="mb-4">Game Over! Here are the results...</h6>
                {tablaPuntuacion.map((item,index)=>
                        <div key={item.player} className={`row-col-12 my-2 align-items-center rounded-4 w-100 p-2 d-flex justify-content-between ${index===0?"bg-black text-light":" bg-secondary text-dark"}`}>
                            <div className="col-5">
                                    <h5>Player {" "+item.player} {index===0?" (Winner!)":""}</h5>
                            </div>
                            <h2>{item.puntaje+" "} Pairs</h2>
                        </div>
                )}
                <div className="row-col-12 d-flex justify-content-around">
                        <div className="col-5 m-1 align-self-center">
                            <button className="rounded-5 boton-start p-3" onClick={handleRestart}>Restart</button>
                        </div>
                        <div className="col-5 m-1 align-self-center">
                            <button className="rounded-5 boton-game-theme2" onClick={menuPrincipal}>New Game</button>
                        </div>
                </div>
            </div>
                    {/* ventana resultados un jugador y guarda record */}
            <div className={`bg-light text-black d-flex flex-column px-md-5 px-1 py-md-4 py-1 w-md-50 rounded-4 my-5 align-items-center ${ventana!==3?"invisible":""}`}>
                        <h6 className="mb-4">Game Over! Here is your Time...</h6>

                        <div className={`row-col-12 my-2 align-items-center rounded-4 w-100 p-2 d-flex justify-content-center bg-black text-light`}>

                                    <h5>{tiempoFinish+"  "} Seconds</h5>

                        </div>
                        {agregarNuevoRecord?<>
                            <h6>Do you want add your new record?</h6>
                            <input maxLength={12} type="text" className="input-group rounded-3" name="nombre" value={nombre} onChange={handleNombre} placeholder="Ingresa tu nombre"/>
                            <button className="btn btn-outline-dark rounded-5" onClick={handleAddRecord}>Add</button>
                        </>
                        :""}

                <div className="row-col-12 d-flex justify-content-around">
                        <div className="col-5 m-1 align-self-center">
                            <button className="rounded-5 boton-start p-3" onClick={handleRestart}>Restart</button>
                        </div>
                        <div className="col-5 m-1 align-self-center">
                            <button className="rounded-5 boton-game-theme2" onClick={menuPrincipal}>New Game</button>
                        </div>
                </div>
            </div>
                        {/* ventana de ranking */}
            <div className={`bg-light text-black d-flex flex-column px-md-5 px-1 py-md-4 py-1 w-md-50 rounded-4 my-5 align-items-center ${ventana!==4?"invisible":""}`}>
                        <h1 className="mb-4">Ranking...</h1>
                        
                        <h3 className="align-self-start">4x4</h3>  
                        <div className={`row-col-12 my-2 align-items-center rounded-4 w-100 p-2 d-flex  bg-black text-light flex-column`}>
                               {ranking.map((item,index)=>
                                        <div className={`d-flex justify-content-between w-100 align-items-center`}>
                                            <h5 key={item.id}>{index+1+". "}{item.nombre}</h5>
                                            <h6>{item.tiempo+"  "}s</h6>
                                        </div>                                    
                               )}
                                
                        </div>
                        
                        <h3 className="align-self-start">6x6</h3>
                        <div className={`row-col-12 my-2 align-items-center rounded-4 w-100 p-2 d-flex  bg-black text-light flex-column`}>
  
                                {ranking2.map((item, index)=>
                                        <div className={`d-flex justify-content-between w-100 align-items-center`}>
                                            <h5 key={item.id}>{index+1+". "}{item.nombre}</h5>
                                            <h6>{item.tiempo+"  "}s</h6>
                                        </div>                    
                                )}                              
                        </div>

                <div className="row-col-12 d-flex justify-content-around">
                        <div className="col-5 m-1 align-self-center">
                            <button className="rounded-5 boton-start p-3" onClick={handleRestart}>Restart</button>
                        </div>
                        <div className="col-5 m-1 align-self-center">
                            <button className="rounded-5 boton-game-theme2" onClick={menuPrincipal}>New Game</button>
                        </div>
                </div>
            </div>
                            {/* ventana de game over cuando termina el tiempo */}
            <div className={`bg-light text-black d-flex flex-column px-md-5 px-1 py-md-4 py-1 w-md-50 rounded-4 my-5 align-items-center ${ventana!==5?"invisible":""}`}>
                        <h1 className="mb-4">Game Over..</h1>

                <div className="row-col-12 d-flex justify-content-around">
                        <div className="col-5 m-1 align-self-center">
                            <button className="rounded-5 boton-start p-3" onClick={handleRestart}>Restart</button>
                        </div>
                        <div className="col-5 m-1 align-self-center">
                            <button className="rounded-5 boton-game-theme2" onClick={menuPrincipal}>New Game</button>
                        </div>
                </div>
            </div>

            <div className={`bg-light text-black d-flex flex-column px-md-5 px-1 py-md-4 py-1 w-md-50 rounded-4 my-5 align-items-center ${ventana!==6?"invisible":""}`}>
                <div className="d-flex w-100 justify-content-end" onClick={()=>{setVentana(0)}}>
                    <button className='btn btn-danger'>X</button>
                </div>
                <TutorialGame/>
                <button className='btn btn-success' onClick={()=>{setVentana(0)}}>JUGAR</button>
            </div>


      </div>
  </>
)
}

export default Juego