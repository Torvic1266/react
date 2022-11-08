import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styleMain.css'
import MainDashboard from './components/MainDashboard';
import {createBrowserRouter,RouterProvider,}from "react-router-dom";
import NavBar from "./components/NavBar"
import TotalDeCategorias from "./components/TotalDeCategorias"
import TotalDeProductos from "./components/TotalDeProductos"
import TotalDeUsuarios from "./components/TotalDeUsuarios"
import UltimoProducto from "./components/UltimoProducto"
import UltimoUsuario from "./components/UltimoUsuario"
import ProductosCategorias from "./components/ProductosCategorias"
import Lista from "./components/Lista"


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children: [
      {
        path: "lista",
        element: <div className="lista"><Lista/></div>
      },
      {
        path: "home",
        element: 
          <MainDashboard/>
      },
      {
        path: "categorias",
        element: <div className="totalCategorias"><TotalDeCategorias/></div>
      },
      {
        path: "productos",
        element: <div className="totalProductos"><TotalDeProductos/></div>
      },
      {
        path: "usuarios",
        element: <div className="totalUsuarios"><TotalDeUsuarios/></div>
      },
      {
        path: "categoria",
        element: <div className="productosCategorias"><ProductosCategorias/></div>
      },
      {
        path: "usuario",
        element: <div className="ultimoUsuario"><UltimoUsuario/></div>
      },
      {
        path: "producto",
        element: <div className="ultimoProducto"><UltimoProducto/></div>
      }
    ],

  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="divMain">
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);

