import { Component } from "react";
import App from "../App";
import PaginaFilme from "../filme";
import Listagem from "../filme/listagem";

const rotas = [
    {
        path: "/",
        Component: App,
    },
    {
        path: "/filme",
        Component: PaginaFilme,
    },
    {
        path: "/livro",
        Component: Listagem,
    }
]

export default rotas;