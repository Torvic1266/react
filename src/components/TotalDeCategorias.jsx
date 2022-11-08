import { useEffect, useState } from "react"

const TotalDeCategorias = () => {
    const [categorias, setCategorias] = useState([])

    
    useEffect(() => {
        const url = "http://localhost:3001/api/categorias"

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({ data }) => {
                setCategorias(data)
            })
    }, [])

    const totalDeCategorias = categorias.length

    return (
        <section>
            <h3 className="h3-productsT">Total de Categorías</h3>
            <p className="p-productosT">{totalDeCategorias}</p>
        </section>
    )
}

export default TotalDeCategorias