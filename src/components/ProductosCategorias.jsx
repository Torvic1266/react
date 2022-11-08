import { useEffect, useState } from "react"

const ProductosCategorias = () => {
    const [pCategorias, setPCategorias] = useState([])
    useEffect(() => {
        const url = "http://localhost:3001/api/categorias"

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({ data }) => {
                setPCategorias( data )
            })  
    }, [])

        
    const totalDeCategorias = pCategorias.length

    return (
        <section>
            <h3 className="h3-productsT">Total de Categorías</h3>
            <p className="p-productosT">{totalDeCategorias}</p>
        </section>
    )
}

export default ProductosCategorias