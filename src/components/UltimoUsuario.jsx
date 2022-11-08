import { useEffect, useState } from "react"
// import TotalDeUsuarios from "./TotalDeUsuarios"

const UltimoUsuario = () => {
    const [usuario, setUsuario] = useState([])

    // const prueba = <TotalDeUsuarios/>

    useEffect(() => {
        const url = "http://localhost:3001/api/usuarios"
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
            <h3 className="ultimoItem">Ultimo Usuario</h3>
            <p className="ultimoItem">Nombre: {usuario.name}</p>
            <p className="ultimoItem">Email: {usuario.email}</p>
            
        </section>
    )
}

export default UltimoUsuario