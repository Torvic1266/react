import { useEffect, useState } from "react"

const Categoria = () => {
    const [Categoria, setCategoria] = useState([])

   

    useEffect(() => {
        const url = 'http://localhost:3001/api/categoria'

        fetch(url)
            .then(response =>
               response.json()
            )
            .then(({ data }) => {
                const categoria = data[data.length - 1]
                setCategoria(categoria)
            })
    }, [])

    if (Categoria) {
        console.log(Categoria);
    }


    return (
        <section>
            <h3>Categoria</h3>
            <p>Nombre: {Categoria.name}</p>
            
        </section>
    )
}

export default Categoria