import Lista from "./Lista";
import ProductosCategorias from "./ProductosCategorias";
import TotalDeCategorias from "./TotalDeCategorias";
import TotalDeProductos from "./TotalDeProductos";
import TotalDeUsuarios from "./TotalDeUsuarios";
import UltimoProducto from "./UltimoProducto";
import UltimoUsuario from "./UltimoUsuario";
import '../styleMain.css';

const MainDashboards = () => {

  return (
    
    <section className="mainSection">

        <article className="totales">
            <div className="totalCategorias"><TotalDeCategorias/></div>
            <div className="totalProductos"><TotalDeProductos/></div>
            <div className="totalUsuarios"><TotalDeUsuarios/></div>
        </article>

        <article className="ultimos">
          <div className="ultimoProducto"><UltimoProducto/></div>
          <div className="ultimoUsuario"><UltimoUsuario/></div>
        </article>

        <article className="lastArticle">
          <div className="productosCategorias"><ProductosCategorias/></div>
          <div className="lista"><Lista/></div>
        </article>

    </section>

  )
}

export default MainDashboards