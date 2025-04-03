import EstruturaPagina from "../componentes/EstruturaPagina"
import Secao from "../componentes/Secao";
import Listagem from "./listagem";
import { filmes as listaFilmes } from '../util/constantes';
import Cadastro from "./cadastro";
import { useEffect, useState } from "react";
import { buscarFilmes, inserirFilme, atualizarFilme, excluirFilme } from "../services/filme";

const FILME_INICIAL = {
    titulo: '',
    subtitulo: '',
    diretor: ''
}

const PaginaFilme = props => {
    const [ filmes, setFilmes ] = useState([]);
    const [ filme, setFilme ] = useState(FILME_INICIAL);

    const editarFilme = filmeAEditar => {
        limparFormulario();
        console.log("Filme a Editar: ", filmeAEditar);
        setFilme(filmeAEditar)
    }

    const limparFormulario = () => {
        setFilme(FILME_INICIAL);
    }

    const salvarFilme = async filmeASalvar => {
        console.log("Filme a Salvar: ", filmeASalvar);
        if (filmeASalvar.id) {
            console.log("Filme em Atualização")
            await atualizarFilme(filme);
            carregarFilmes();
            return;
        }
        
        console.log("Filme em Inserção")
        await inserirFilme(filme);
        carregarFilmes();
        limparFormulario();
    }

    const apagarFilme = async filme => {
        await excluirFilme(filme.id);
        carregarFilmes();
    }
 
    const carregarFilmes = async () => {
        const filmes = await buscarFilmes();
        setFilmes(filmes);
        
        //buscarFilmes().then(filmes => setFilmes(filmes))
    }

    useEffect(() => {
        carregarFilmes();
    }, []);


    return <EstruturaPagina titulo="Filmes">
        <Secao titulo="Cadastro de Filmes">
            <Cadastro filme={filme} salvar={salvarFilme} limpar={limparFormulario} />
        </Secao>
        <Secao titulo="Listagem de Filmes">
            <Listagem filmes={filmes} editar={editarFilme} excluir={apagarFilme} />
        </Secao>
    </EstruturaPagina>
}

export default PaginaFilme;