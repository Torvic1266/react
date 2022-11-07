import { useEffect, useState } from "react"


const TotalDeProductos = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        const url = "http://localhost:3001/api/juguetes"

        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                setProducts(data)
            })
    }, [])

    const totalDeProductos = products.length

    return (
        <section>
            <h3 className="h3-productsT">Total de Productos</h3>
            <p className="p-productosT">{totalDeProductos}</p>
        </section>
    )
}

export default TotalDeProductos