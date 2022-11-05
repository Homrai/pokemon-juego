import { useParams } from "react-router-dom"

const Game = () => {
    const {opcionesJuego} =useParams();
    console.log(opcionesJuego);
  return (
    <div>
      
    </div>
  )
}

export default Game