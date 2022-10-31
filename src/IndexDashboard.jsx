import Lista from "./components/Lista";
import UltimoProducto from "./components/UltimoProducto";
import UltimoUsuario from "./components/UltimoUsuario";

const IndexDashboard = () =>{
    return(<>
    <h3>Titulo</h3>
        <UltimoProducto/>
        <Lista/>
        <UltimoUsuario/>
        

    </>)
}

export default IndexDashboard;