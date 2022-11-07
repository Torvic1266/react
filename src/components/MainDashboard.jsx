import TotalDeCategorias from "./TotalDeCategorias"
import TotalDeProductos from "./TotalDeProductos"
import TotalDeUsuarios from "./TotalDeUsuarios"
import UltimoProducto from "./UltimoProducto"
import UltimoUsuario from "./UltimoUsuario"
import ProductosCategorias from "./ProductosCategorias"
import Lista from "./Lista"
import '../styleMain.css'

const MainDashboard = () => {

  return (
    
      <section className="mainSection">
        <article className="totales">
          <div className="totalProductos"><TotalDeProductos/></div>
          <div className="totalCategorias"><TotalDeCategorias/></div>
          <div className="totalUsuarios"><TotalDeUsuarios/></div>
        </article>
        <article className="ultimos">
          <div className="ultimoUsuario"><UltimoUsuario/></div>
          <div className="ultimoProducto"><UltimoProducto/></div>
        </article>
        <article className="lastArticle">
          <div className="productosCategorias"><ProductosCategorias/>
          </div>
          <div className="lista"><Lista/></div>
        </article>
      </section>

  )
}

export default MainDashboard