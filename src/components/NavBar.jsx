import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <NavLink className="navbar-brand nav-link" to={`home`}>Dashboard Totaltoys</NavLink>
                <div className="navbar-nav">
                    <NavLink className="nav-link" end to={`lista`}>Lista</NavLink>
                    <NavLink className="nav-link" end to={`t-productos`}>Total De Productos</NavLink>
                    <NavLink className="nav-link" end to={`t-usuarios`}>Total De Usuarios</NavLink>
                    <NavLink className="nav-link" end to={`t-categorias`}>Total De Categorias</NavLink>
                    <NavLink className="nav-link" end to={`categoria`}>Categorias</NavLink>
                    <NavLink className="nav-link" end to={`u-producto`}>Ultimo Producto</NavLink>
                    <NavLink className="nav-link" end to={`u-usuario`}>Ultimo Usuario</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
