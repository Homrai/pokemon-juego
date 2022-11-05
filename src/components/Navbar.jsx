import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid  d-flex justify-content-around">
          <NavLink className="btn btn-outline-light rounded-5" to="/"> <i className="bi bi-house-fill"/></NavLink>
          <NavLink className="btn btn-light" to="juego">GAME</NavLink>
          <NavLink className="btn btn-light" to="notificaciones">Notifications</NavLink>
          <NavLink className="btn btn-light" to="generador">Pass Generator</NavLink>
        </div>
    </nav>
  )
}

export default Navbar