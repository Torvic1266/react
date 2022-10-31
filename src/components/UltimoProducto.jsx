import { useEffect, useState } from "react"

const UltimoProducto = () => {
    const [producto, setProducto] = useState([])

    

    useEffect(() => {
        const url = 'http://localhost:3001/api/juguetes'

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
        <section>
            <h3>Ultimo producto</h3>
            <p>Nombre: {producto.name}</p>
            
        </section>
    )
}

export default UltimoProducto