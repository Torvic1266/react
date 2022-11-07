import { useEffect, useState } from "react"

const TotalDeCategorias = () => {
    const [categorias, setCategorias] = useState([])

    
    useEffect(() => {
        const url = "http://localhost:3001/api/categorias"

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({countByCategory}) => {
                setCategorias(countByCategory)
            })
    }, [])

    const totalDeCategorias = categorias.length

    return (
        <section className="seccionCategorias">
            <h3 className="h3-categoriasT">Total De Categorias</h3>
            <p className="p-categoriasT">{totalDeCategorias}</p>
        </section>
    )
}

export default TotalDeCategorias