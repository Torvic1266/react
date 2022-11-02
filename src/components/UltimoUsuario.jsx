import { useEffect, useState } from "react"

const UltimoUsuario = () => {
    const [usuario, setUsuario] = useState([])

   
    useEffect(() => {
        const url = 'http://localhost:3001/api/usuarios'

        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                const ultimoUsuario = data[data.length - 1]
                setUsuario(ultimoUsuario)
            })
    }, [])

    if (usuario) {
        console.log(usuario);
    }


    return (
        <section className="sectionUltimo">
            <h3 className="ultimoItem">Ultimo usuario</h3>
            <p className="ultimoItem">Nombre: {usuario.name}</p>
        </section>
    )
}

export default UltimoUsuario