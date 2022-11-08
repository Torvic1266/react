import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
            <img className="imgNavbar" src="/logo-Total-Toys.jpg" alt="" style={{ width: "300px" }}/>
                <NavLink className="navbar-brand nav-link" to={`home`}>Dashboard Totaltoys</NavLink>
                <div className="navbar-nav">
                    <NavLink className="nav-link" end to={`lista`}>Lista</NavLink>
                    <NavLink className="nav-link" end to={`productos`}>Total De Productos</NavLink>
                    <NavLink className="nav-link" end to={`usuarios`}>Total De Usuarios</NavLink>
                    <NavLink className="nav-link" end to={`categorias`}>Total De Categorias</NavLink>
                    <NavLink className="nav-link" end to={`categoria`}>Categorias</NavLink>
                    <NavLink className="nav-link" end to={`producto`}>Ultimo Producto</NavLink>
                    <NavLink className="nav-link" end to={`usuario`}>Ultimo Usuario</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
