import { useEffect, useState } from "react"

const UltimoUsuario = () => {
    const [usuario, setUsuario] = useState([])

    // const prueba = <TotalDeUsuario/>

    useEffect(() => {
        const url = 'http://localhost:3001/api/usuarios'

        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                //const ultimoUsuario = data[data.length - 1]
                setUsuario(data)
            })
    }, [])

    if (usuario) {
        console.log(usuario);
    }


    // return (
    //     <section>
    //         <h3>Ultimo usuario</h3>
    //         <p>Nombre: {usuario.name}</p>
    //         <p>Descripcion: {usuario.description}</p>
    //         <p>Detalle:</p>
    //     </section>
    // )
}

export default UltimoUsuario