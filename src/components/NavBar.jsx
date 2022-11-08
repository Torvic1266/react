import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: "#87FADC"}}>
            <img className="imgNavbar" src="/logo-Total-Toys.jpg" alt="" style={{ width: "300px" }}/>
                <NavLink className="navbar-brand nav-link" to={`home`}><i class="fa-solid fa-table-columns"></i> Dashboard Totaltoys</NavLink>
                <div className="navbar-nav">
                    <NavLink className="nav-link" end to={`lista`}><i class="fa-solid fa-list"></i> Lista</NavLink>
                    <NavLink className="nav-link" end to={`productos`}><i class="fa-sharp fa-solid fa-box"></i> Total De Productos</NavLink>
                    <NavLink className="nav-link" end to={`usuarios`}><i class="fa-solid fa-users"></i> Total De Usuarios</NavLink>
                    <NavLink className="nav-link" end to={`categorias`}><i class="fa-regular fa-list-dropdown"></i> Total De Categorias</NavLink>
                    <NavLink className="nav-link" end to={`producto`}><i class="fa-solid fa-box-open"></i> Ultimo Producto</NavLink>
                    <NavLink className="nav-link" end to={`usuario`}><i class="fa-sharp fa-solid fa-user"></i> Ultimo Usuario</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
