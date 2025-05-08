import { Link, NavLink } from "react-router";
import "./style/estruturapagina.css"
import { Button } from "@mui/material";

const EstruturaPagina = props => {
    const { titulo, children } = props;

    return <div className="mainPage">
        <div className="header">
            <h1>Acervo Cultural</h1>
            <h2>{titulo}</h2>
            <Button variant='contained'><Link to="/filme">Filmes</Link></Button>
            <Button variant='contained'>
                <Link to={{
                    pathname: "/livro",
                    search: "?id=1&titulo=Avatar"
                }}>Livros</Link>
            </Button>
        </div>
        {children}
    </div>
    
    
}

export default EstruturaPagina;