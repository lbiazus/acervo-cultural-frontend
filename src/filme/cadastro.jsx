import '../assets/css/cadastro.css'
import TextInput from '../componentes/TextInput';

const Cadastro = props => {
    const { filme, salvar, limpar } = props;

    const alterarValor = (nomeCampo, valorCampo) => {
        filme[nomeCampo] = valorCampo;
    }

    /*const alterarSubtitulo = subtitulo => {
        console.log("subtitulo ", subtitulo);
        console.log("filme antes: ", filme);
        filme.subtitulo = subtitulo;
        console.log("filme depois: ", filme);
    }*/

    return (
        <div className="formulario">
            <TextInput label="Título" value={filme.titulo} 
                handleChange={e => alterarValor("titulo", e.target.value)}/>
            <TextInput label="Subtitulo" value={filme.subtitulo}
                handleChange={e => alterarValor("subtitulo", e.target.value)}/>
            <TextInput label="Diretor" value={filme.diretor}
                handleChange={e => alterarValor("diretor", e.target.value)}/>
            <div className='botoes'>
                <button className='botao-formulario' onClick={limpar}>Novo</button>
                <button className='botao-formulario' onClick={() => salvar(filme)}>Salvar</button>
            </div>
        </div>
    )
}

export default Cadastro;