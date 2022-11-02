import { useEffect, useState } from "react"

const ProductosCategorias = () => {
    const [pCategorias, setPCategorias] = useState([])
    useEffect(() => {
        const url = 'http://localhost:3001/api/categorias'

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({countByCategory}) => {
                setPCategorias(countByCategory)
            })  
    }, [])

    
    return (
        <section>
        
            <h3>Productos por Categorias</h3>

            {pCategorias.map(item => <p key={item.categoria}>

                <b>{item.categoria}:</b>
                <p>{item.productos} producto/s</p>
            
            </p>)}
        </section>
    )}


export default ProductosCategorias