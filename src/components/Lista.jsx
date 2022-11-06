import { useEffect, useState } from "react"
const Lista = () => {
    const [product, setProduct] = useState([])



    useEffect(() => {
        const url = `http://localhost:3001/api/juguetes`

        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                setProduct(data)
            })
    }, [])

    let producto = [];


    for (let i = 0; i < product.length; i++) {
        producto.push(<p>
            <p className="productoListElement"> <b> Nombre:</b> {product[i].name}</p>
            <p className="productoListElement"> <b> Descripción:</b> {product[i].description}</p>
            <p className="productoListElement"> <b> Categoria:</b> {product[i].category}</p>
            {/* <a className="productoListLink" href={product[i].allProductDetails}>Detalle</a>*/}
            <hr className="hrProduct"/>
            </p>);
    }

    return (
        <section>

            <h3>Lista</h3>
            
                {
                    producto.map(product => <div className="productoList"> {product} </div>)
                }
            

        </section>
    )
}


export default Lista