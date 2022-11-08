import { useEffect, useState } from "react"

const TotalDeUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    
    useEffect(() => {
        const url = "http://localhost:3001/api/usuarios"

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({data}) => {
                setUsuarios(data)
            })
    }, [])

    const totalDeUsuarios = usuarios.length

    return (
        <section>
            <h3 className="h3-usuariosT">Total De Usuarios</h3>
            <p className="p-usuariosT">{totalDeUsuarios}</p>

        </section>
    )
}

export default TotalDeUsuarios