import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import '../assets/css/listagem.css';
import '../assets/css/tabela.css'

const Listagem = props => {
    const { filmes, editar, excluir } = props;

    /*if (filmes.length === 0) {
        return <span>Não existem filmes cadastrados.</span>
    }*/

    return (
        <>
            {(filmes.length === 0) && <span>Não existem filmes cadastrados.</span>}
            {filmes.length > 0 && 
                <div className='listagem'>
                    <TableContainer component={Card}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Título</TableCell>
                                    <TableCell>Subtitulo</TableCell>
                                    <TableCell>Diretor</TableCell>
                                    <TableCell colSpan={2}>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filmes.map(filme => (
                                    <TableRow key={filme.id}>
                                        <TableCell>{filme.titulo}</TableCell>
                                        <TableCell>{filme.subtitulo}</TableCell>
                                        <TableCell>{filme.diretor}</TableCell>
                                        <TableCell className='acoes'><button onClick={() => editar(filme)}>Editar</button></TableCell>
                                        <TableCell className='acoes'><button onClick={() => excluir(filme)}>Excluir</button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            }
        </>
    )
}

export default Listagem;