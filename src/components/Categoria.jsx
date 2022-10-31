import { useEffect, useState } from "react"

const Categoria = () => {
    const [Categoria, setCategoria] = useState([])

    // const prueba = <TotalDeCategoria/>

    useEffect(() => {
        const url = 'http://localhost:3001/api/categoria'

        fetch(url)
            .then(response =>
                console.log(response)
                //response.json()
            )
            .then(({ data }) => {
                //const Categoria = data[data.length - 1]
                setCategoria(data)
            })
    }, [])

    if (Categoria) {
        console.log(Categoria);
    }


    // return (
    //     <section>
    //         <h3>Categoria</h3>
    //         <p>Nombre: {categoria.name}</p>
    //         <p>Descripcion: {Categoria.description}</p>
    //         <p>Detalle:</p>
    //     </section>
    // )
}

export default Categoria