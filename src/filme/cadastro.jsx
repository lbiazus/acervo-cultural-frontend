import '../assets/css/cadastro.css'
import TextInput from '../componentes/TextInput';

const Cadastro = props => {

    return (
        <div className="formulario">
            <TextInput label="Título"/>
            <TextInput label="Subtitulo"/>
            <TextInput label="Diretor"/>
            <div className='botoes'>
                <button className='botao-formulario'>Novo</button>
                <button className='botao-formulario'>Salvar</button>
            </div>
        </div>
    )
}

export default Cadastro;