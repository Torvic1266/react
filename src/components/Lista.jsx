import { useEffect, useState } from "react"

const Lista = () => {
    const [Lista, setLista] = useState([])

    // const prueba = <TotalDeLista/>

    useEffect(() => {
        const url = 'http://localhost:3001/api/Lista'

        fetch(url)
            .then(response =>
                console.log(response)
                //response.json()
            )
            .then(({ data }) => {
                //const ultimoProducto = data[data.length - 1]
                setLista(data)
            })
    }, [])

    if (Lista) {
        console.log(Lista);
    }


    // return (
    //     <section>
    //         <h3>Ultimo producto</h3>
    //         <p>Nombre: {producto.name}</p>
    //         <p>Descripcion: {producto.description}</p>
    //         <p>Detalle:</p>
    //     </section>
    // )
}

export default Lista