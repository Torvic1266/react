import TotalDeCategorias from "./TotalDeCategorias"
import TotalDeProductos from "./TotalDeProductos"
import TotalDeUsuarios from "./TotalDeUsuarios"
import UltimoProducto from "./UltimoProducto"
import UltimoUsuario from "./UltimoUsuario"
import '../styleMain.css'

const MainDashboard = () => {

  return (
    
      <section className="mainSection" style={{ backgroundColor: "#FADC87"}}>
        <div className="mainContainer">
        <article className="totales">
          <div className="totalProductos"><TotalDeProductos/></div>
          <div className="totalCategorias"><TotalDeCategorias/></div>
          <div className="totalUsuarios"><TotalDeUsuarios/></div>
        </article>
        <article className="ultimos">
          <div className="ultimoUsuario"><UltimoUsuario/></div>
          <div className="ultimoProducto"><UltimoProducto/></div>
        </article>
        </div>
      </section>

  )
}

export default MainDashboard