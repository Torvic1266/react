import { useEffect, useState } from "react"

const ListaTotal = () => {
    const [Lista, setLista] = useState([])

    

    useEffect(() => {
        const url = 'http://localhost:3001/api/juguetes'

        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                setLista(data)
            })
    }, [])

    let lista = []

    for (let i = 0; i < Lista.length; i++) {
        lista.push(<p>
            <p className="listaListElement"> <b> Nombre:</b> {Lista[i].name}</p>
            <p className="listaListElement"> <b> Descripción:</b> {Lista[i].description}</p>
            <p className="listaListElement"> <b> Categoria:</b> {Lista[i].category}</p>
            <hr className="hrProduct"/>
            </p>);
    }
    
     return (
         <section>
            <h3>lista</h3>
                         {
                    lista.map(Lista => <div className="ListaP"> {Lista} </div>)
                }
         </section>

     )
}

export default ListaTotal