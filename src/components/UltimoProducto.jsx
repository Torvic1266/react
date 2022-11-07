import { useEffect, useState } from "react"
// import TotalDeProductoUltimoProductos from "./TotalDeProductoUltimoProductos"

const UltimoProducto = () => {
    const [producto, setProducto] = useState([])

    // const prueba = <TotalDeProductos/>

    useEffect(() => {
        const url = "http://localhost:3001/api/juguetes"

        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                const ultimoProducto = data[data.length - 1]
                setProducto(ultimoProducto)
            })
    }, [])

    if (producto) {
        console.log(producto);
    }


    return (
        <section className="sectionUltimo">
            <h3 className="ultimoItem">Ultimo producto</h3>
            <p className="ultimoItem">Nombre: {producto.name}</p>
            <p className="ultimoItem">Descripcion: {producto.descripcion}</p>
            
        </section>
    )
}

export default UltimoProducto